import { useState, useEffect, type ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setCredentials } from "../features/authSlice";
import { uploadAvatar, fetchStories, getContributors } from "../services/api";
import { type Story } from "../../../types/index";

export default function ProfilePage() {
    const { user, accessToken } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();

    const [myStories, setMyStories] = useState<Story[]>([]);
    const [contributedStories, setContributedStories] = useState<Story[]>([]);
    const [uploading, setUploading] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStories() {
            if (!accessToken || !user) return;

            try {
                const allStories = await fetchStories(accessToken);

                // filter stories authored by the user
                const authored = allStories.filter((s: Story) => s.author_id === user.id);
                setMyStories(authored);

                // stories user contributed to (we will need to check contributors)
                // for each story, check if user is a contributor
                const contributedPromises = allStories.map(async (story: Story) => {
                    try {
                        const contributors = await getContributors(story.id, accessToken);
                        const isContributor = contributors.some((c: any) => c.user_id === user.id);
                        return isContributor ? story : null;
                    } catch {
                        return null;
                    }
                });

                const contributedResults = await Promise.all(contributedPromises);
                const contributed = contributedResults.filter((s): s is Story => s !== null && s.author_id !== user.id); //exclude stories they authored
                setContributedStories(contributed);
            } catch (error) {
                console.error('Error loading stories:', error);
            } finally {
                setLoading(false);
            }
        }
        loadStories();
    }, [accessToken, user]);

    async function handleAvatarUpload(e: ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file || !accessToken || !user) return;

        // validate file type
        if (!file.type.startsWith('image/')) {
            alert('Please select an image file.');
            return;
        }

        // validate file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            alert('Image must be smaller than 5MB');
            return;
        }

        setUploading(true);

        try {
            // convert to base64
            const reader = new FileReader();
            reader.onloadend = async () => {
                try {
                    const base64String = reader.result as string;

                    // upload to backend
                    const result = await uploadAvatar(base64String, accessToken);

                    // update Redux state with new avatar url
                    dispatch(setCredentials({
                        user: { ...user, avatar_url: result.avatar_url },
                        accessToken,
                    }));

                    alert('Avatar updated successfully');
                } catch (error: any) {
                    alert(error.message || 'Failed to upload avatar');
                } finally {
                    setUploading(false);
                }
            };
            reader.readAsDataURL(file);
        } catch (error: any) {
            alert(error.message || 'Failed to upload avatar');
            setUploading(false);
        }
    }

    if (!user) {
        return <div className="container mx-auto p-8">Please log in to view profile</div>;
    }

    return (
        <div className="container mx-auto p-8 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8">
                My Profile
            </h1>

            {/* Profile Info Card */}
            <div className="card bg-base-100 shadow-xl mb-8">
                <div className="card-body">
                    <div className="flex items-start gap-6">
                        {/* Avatar */}
                        <div className="flex flex-col items-center gap-2">
                            <div className="avatar">
                                <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    {user.avatar_url ? (
                                        <img src={user.avatar_url} alt={user.username} />
                                    ) : (
                                        <div className="bg-neutral text-neutral-content flex items-center justify-center text-4xl">
                                            {user.username.charAt(0).toUpperCase()}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <label className={`btn btn-sm btn-primary ${uploading ? 'loading' : ''}`}>
                                {uploading ? 'Uploading...' : 'Change Avatar'}
                                <input type="file" accept="image/*" onChange={handleAvatarUpload} disabled={uploading} className="hidden"/>
                            </label>
                        </div>

                        {/* User Info */}
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold mb-2">
                                {user.username}
                            </h2>
                            <p className="text-base-content/60 mb-4">
                                {user.email}
                            </p>
                            <div className="stats shadow">
                                <div className="stat">
                                    <div className="stat-title">
                                        Stories Written
                                    </div>
                                    <div className="stat-value text-primary">
                                        {myStories.length}
                                    </div>
                                </div>
                                <div className="stat">
                                    <div className="stat-title">
                                        Contributed To
                                    </div>
                                    <div className="stat-value text-primary">
                                        {contributedStories.length}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* My Stories */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                    My Stories
                </h2>
                {loading ? (
                    <div className="text-center py-8">
                        <span className="loading loading-spinner loading-lg"></span>
                    </div>
                ) : myStories.length === 0 ? (
                    <div className="text-center py-8">
                        <p className="text-base-content/60 mb-4">
                            You haven't written any stories yet.
                        </p>
                        <Link to="/stories/new" className="btn btn-primary">
                            Write Your First Story
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {myStories.map((story) => (
                            <div key={story.id} className="card bg-base-100 shadow">
                                <div className="card-body">
                                    <h3 className="card-title">
                                        {story.title}
                                    </h3>
                                    <p className="line-clamp-2">
                                        {story.content}
                                    </p>
                                    <div className="card-actions justify-end">
                                        <Link to={`/stories/${story.id}`} className="btn btn-sm btn-primary">
                                            View
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Contributed Stories */}
            <div>
                <h2 className="text-2xl font-bold mb-4">
                    Stories I Contribute To
                </h2>

                {loading ? (
                    <div className="text-center py-8">
                        <span className="loading loading-spinner loading-lg"></span>
                    </div>
                ) : contributedStories.length === 0 ? (
                    <div className="text-center py-8">
                        <p className="text-base-content/60">
                            You're not a contributor on any stories yet
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {contributedStories.map((story) => (
                            <div key={story.id} className="card bg-base-100 shadow">
                                <div className="card-body">
                                    <h3 className="card-title">
                                        {story.title}
                                    </h3>
                                    <p className="line-clamp-2">
                                        {story.content}
                                    </p>
                                    <div className="badge badge-secondary">
                                        Contributor
                                    </div>
                                    <div className="card-actions justify-end">
                                        <Link to={`/stories/${story.id}`} className="btn btn-sm btn-primary">
                                            View
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
