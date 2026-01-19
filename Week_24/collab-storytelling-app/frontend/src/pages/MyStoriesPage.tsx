import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { fetchStories } from "../services/api";
import { type Story } from "../../../types/index";


export default function MyStoriesPage() {
    const { accessToken, user } = useAppSelector((state) => state.auth);
    const [myStories, setMyStories] = useState<Story[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        async function loadMyStories() {
            if (!accessToken || !user) return;

            setLoading(true);
            try {
                const allStories = await fetchStories(accessToken);

                // filter only author stories by current user
                const filtered = allStories.filter((story: Story) => story.author_id === user.id);
                setMyStories(filtered);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        loadMyStories();
    }, [accessToken, user]);

    if (loading) {
        return (
        <div className="flex justify-center items-center min-h-screen">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
        );
    }

    if (error) {
        return (
        <div className="container mx-auto p-8">
            <div className="alert alert-error">
            <span>{error}</span>
            </div>
        </div>
        );
    }

    return (
        <div className="container mx-auto p-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-4xl font-bold">My Stories</h1>
                <Link to="/stories/new" className="btn btn-primary">
                    Create Story
                </Link>
            </div>

            {myStories.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-xl text-base-content/60 mb-4">You haven't created any stories yet</p>
                    <Link to="/stories/new" className="btn btn-primary">
                        Create your first story
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {myStories.map((story) => (
                        <div key={story.id} className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">{story.title}</h2>
                                <p className="line-clamp-3">{story.content}</p>
                                <div className="text-sm text-base-content/60 mt-2">
                                    Created: {new Date(story.created_at).toLocaleDateString()}
                                </div>
                                <div className="card-actions justify-end mt-4">
                                    <Link to={`/stories/${story.id}`} className="btn btn-sm btn-primary">
                                        View
                                    </Link>
                                    <Link to={`/stories/${story.id}/edit`} className="btn btn-sm btn-ghost">
                                        Edit
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    ); 
}