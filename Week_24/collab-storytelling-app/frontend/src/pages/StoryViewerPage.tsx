import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setCurrentStory, removeStory } from '../features/storiesSlice';
import { fetchStoryById, deleteStory, getContributors, toggleCommentsEnabled } from '../services/api';
import Contributors from "../components/Contributors";
import Comments from "../components/Comments";
import ShareButtons from "../components/ShareButtons";

export default function StoryViewerPage() {
    const { id }= useParams<{ id: string }>();
    const { currentStory } = useAppSelector((state) => state.stories);
    const { accessToken, user } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [isContributor, setIsContributor] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        async function loadStory() {
            if (!id || !accessToken || !user) return;

            setLoading(true);
            try {
                const [story, contributors] = await Promise.all([
                    fetchStoryById(parseInt(id), accessToken),
                    getContributors(parseInt(id), accessToken),
                ]);
                dispatch(setCurrentStory(story));

                // check if current user is a contributor
                const isUserContributor = contributors.some((c: any) => c.user_id === user.id);
                setIsContributor(isUserContributor);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        loadStory();
    }, [id, accessToken, user, dispatch]);

    async function handleDelete() {
        if (!currentStory || !accessToken) return;

        const confirmed = window.confirm('Are you sure you want to delete this story?');
        if (!confirmed) return;

        setDeleting(true);
        try {
            await deleteStory(currentStory.id, accessToken);
            dispatch(removeStory(currentStory.id));
            navigate('/');
        } catch (error: any) {
            alert(error.message || 'Failed to delete story');
            setDeleting(false);
        }
    }

    async function handleToggleComments() {
        if (!currentStory || !accessToken) return;

        try {
            const updatedStory = await toggleCommentsEnabled(currentStory.id, accessToken);
            dispatch(setCurrentStory(updatedStory));
        } catch (error: any) {
            alert(error.message || 'Failed to toggle comments');
        }
    }


    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-spinner loading-lg"></span> 
            </div>
        );
    }

    if (error || !currentStory) {
        return (
            <div className="container mx-auto p-8">
                <div className="alert alert-error">
                    <span>{error || 'Story not found'}</span>
                </div>
                <Link to="/" className="btn btn-ghost mt-4">
                ← Back to Stories
                </Link>
            </div> 
        );
    }

    const isAuthor = user?.id === currentStory.author_id;

    return (
        <div className="container mx-auto p-8 max-w-4xl">
            <Link to="/" className="btn btn-ghost btn-sm mb-6">
                ← Back to Stories
            </Link>

            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h1 className="text-4xl font-bold mb-4">{currentStory.title}</h1>
                    
                    <div className="text-sm text-base-content/60 mb-6">
                        Created: {new Date(currentStory.created_at).toLocaleDateString()}
                        {currentStory.updated_at !== currentStory.created_at && (
                            <>
                            • Updated: {new Date(currentStory.updated_at).toLocaleDateString()}
                            </>
                        )}
                    </div>

                    <div className="prose max-w-none mb-6">
                        <p className="whitespace-pre-wrap">
                            {currentStory.content}
                        </p>
                    </div>

                    <div className="divider"></div>

                    <ShareButtons storyId={currentStory.id} title={currentStory.title} />

                    <Contributors storyId={currentStory.id} authorId={currentStory.author_id} />

                    <Comments storyId={currentStory.id} storyAuthorId={currentStory.author_id} commentsEnabled={currentStory.comments_enabled ?? false} onToggleComments={handleToggleComments}/>

                    {(isAuthor || isContributor) && (
                    <div className="card-actions justify-end border-t pt-4">

                        <Link to={`/stories/${currentStory.id}/edit`} className="btn btn-primary">
                            Edit Story
                        </Link>

                        {isAuthor && (
                        <button onClick={handleDelete} disabled={deleting} className={`btn btn-error ${deleting ? 'loading' : ''}`}>
                            {deleting ? 'Deleting...' : 'Delete Story'}
                        </button>
                        )}

                    </div>
                    )}
                </div>
            </div>
        </div>
    );
}