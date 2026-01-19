import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addStory } from "../features/storiesSlice";
import { createStory } from "../services/api";

export default function CreateStoryPage() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { accessToken } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();


    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setError('');
        setLoading(true);

        if (!accessToken) {
            setError('You must be logged in to create a story');
            setLoading(false);
            return;
        }

        try {
            const newStory = await createStory(title, content, accessToken);
            dispatch(addStory(newStory));
            navigate('/');
        } catch (error: any) {
            setError(error.message || 'Failed to create story');
        } finally {
            setLoading(false);
        }
    }

    return (
    <div className="container mx-auto p-8 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">Create New Story</h1>

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
          <input
            type="text"
            placeholder="Enter your story title..."
            className="input input-bordered w-full text-lg"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-semibold">Content</span>
          </label>
          <textarea
            placeholder="Write your story here..."
            className="textarea textarea-bordered w-full h-64 text-base"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className={`btn btn-primary flex-1 ${loading ? 'loading' : ''}`}
            disabled={loading}
          >
            {loading ? 'Creating...' : 'Create Story'}
          </button>
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => navigate('/')}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}