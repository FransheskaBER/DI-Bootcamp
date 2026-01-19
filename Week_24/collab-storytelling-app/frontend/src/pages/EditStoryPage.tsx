import { useEffect, useState, useCallback, type FormEvent } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { updateStory as updateStoryInStore } from "../features/storiesSlice";
import { fetchStoryById, updateStory } from "../services/api";
import { useSocket } from "../app/useSocket";
import VersionHistory from "../components/VersionHistory";

export default function EditStoryPage() {
    const { id } = useParams<{ id: string }>();
    const { accessToken } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState('');
    const [collaborators, setCollaborators] = useState<number[]>([]);
    const [isAuthor, setIsAuthor] = useState(false);
    const [showVersionHistory, setShowVersionHistory] = useState(false);
    const { user } = useAppSelector((state) => state.auth);

    // Handle incoming edits from other users
    const handleStoryUpdate = useCallback((data: { content: string; title?: string; editedBy: number }) => {
        setContent(data.content);
        if (data.title) {
            setTitle(data.title);
        }
    }, []);

    const handleUserJoined = useCallback((data: { userId: number }) => {
        setCollaborators(prev => [...prev.filter(id => id !== data.userId), data.userId]);
    }, []);

    const handleUserLeft = useCallback((data: { userId: number }) => {
        setCollaborators(prev => prev.filter(id => id !== data.userId));
    }, []);

    const handleSocketError = useCallback((data: { message: string }) => {
        setError(data.message);
    }, []);

    // Connect to socket for real-time collaboration
    const { emitEdit } = useSocket({
        storyId: id ? parseInt(id) : 0,
        onStoryUpdate: handleStoryUpdate,
        onUserJoined: handleUserJoined,
        onUserLeft: handleUserLeft,
        onError: handleSocketError,
    });

    useEffect(() => {
        async function loadStory() {
            if (!id || !accessToken) return;

            try {
                const story = await fetchStoryById(parseInt(id), accessToken);
                setTitle(story.title);
                setContent(story.content);
                setIsAuthor(story.author_id === user?.id);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        loadStory();
    }, [id, accessToken, user?.id]);

    // Handle title change and broadcast
    function handleTitleChange(newTitle: string) {
        setTitle(newTitle);
        emitEdit(content, newTitle);
    }

    // Handle content change and broadcast
    function handleContentChange(newContent: string) {
        setContent(newContent);
        emitEdit(newContent, title);
    }

    // Handle version restore
    function handleVersionRestore(restoredStory: any) {
        setTitle(restoredStory.title);
        setContent(restoredStory.content);
        emitEdit(restoredStory.content, restoredStory.title);
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if (!id || !accessToken) return;

        setError('');
        setSaving(true);

        try {
            const updatedStory = await updateStory(parseInt(id), title, content, accessToken);
            dispatch(updateStoryInStore(updatedStory));
            navigate('/');
        } catch (error: any) {
            setError(error.message || 'Failed to update story');
        } finally {
            setSaving(false);
        }
    }

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-8 max-w-3xl">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-4xl font-bold">Edit Story</h1>
                {collaborators.length > 0 && (
                    <div className="badge badge-info gap-2">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        {collaborators.length} other{collaborators.length > 1 ? 's' : ''} editing
                    </div>
                )}
            </div>

            {error && (
                <div className="alert alert-error mb-6">
                    <span>{error}</span>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Title</span>
                    </label>
                    <input type="text" placeholder="Enter your story title..." className="input input-bordered w-full text-lg" value={title} onChange={(e) => handleTitleChange(e.target.value)} required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Content</span>
                    </label>
                    <textarea placeholder="Write your story here..." className="textarea textarea-bordered w-full h-64 text-base" value={content} onChange={(e) => handleContentChange(e.target.value)} required />
                </div>

                <div className="flex gap-4">
                    <button type="submit" className={`btn btn-primary flex-1 ${saving ? 'loading' : ''}`} disabled={saving}>
                        {saving ? 'Saving...' : 'Save Changes'}
                    </button>
                    <button type="button" className="btn btn-ghost" onClick={() => navigate(`/stories/${id}`)}>
                        Cancel
                    </button>
                </div>
            </form>

            {isAuthor && (
                <div className="mt-8">
                    <div className="divider"></div>
                    <button
                        className="btn btn-outline btn-sm mb-4"
                        onClick={() => setShowVersionHistory(!showVersionHistory)}
                    >
                        {showVersionHistory ? 'Hide Version History' : 'Show Version History'}
                    </button>

                    {showVersionHistory && accessToken && (
                        <VersionHistory
                            storyId={parseInt(id!)}
                            token={accessToken}
                            onRestore={handleVersionRestore}
                        />
                    )}
                </div>
            )}
        </div>
    );
}