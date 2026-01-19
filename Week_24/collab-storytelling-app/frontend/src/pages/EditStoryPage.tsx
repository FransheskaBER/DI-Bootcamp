import { useEffect, useState, type FormEvent } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { updateStory as updateStoryInStore } from "../features/storiesSlice";
import { fetchStoryById, updateStory } from "../services/api";

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

    useEffect(() => {
        async function loadStory() {
            if (!id || !accessToken) return;

            try {
                const story = await fetchStoryById(parseInt(id), accessToken);
                setTitle(story.title);
                setContent(story.content);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        loadStory();
    }, [id, accessToken])

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
            <h1 className="text-4xl font-bold mb-8">Edit Story</h1>

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
                    <input type="text" placeholder="Enter your story title..." className="input input-bordered w-full text-lg" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Content</span>
                    </label>
                    <textarea placeholder="Write your story here..." className="textarea textarea-bordered w-full h-64 text-base" value={content} onChange={(e) => setContent(e.target.value)} required />
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
        </div>
  );
}