import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setStories, setLoading, setError } from "../features/storiesSlice";
import { fetchStories } from "../services/api";

export default function HomePage() {
    const dispatch = useAppDispatch();
    const { stories, loading, error }= useAppSelector((state) => state.stories);
    const { accessToken } = useAppSelector((state) => state.auth);

    useEffect(() => {
        async function loadStories() {
            if (!accessToken) return;

            dispatch(setLoading(true));
            try {
                const data = await fetchStories(accessToken);
                dispatch(setStories(data));
            } catch (error: any) {
                dispatch(setError(error.message));
            }
        }

        loadStories();
    }, [accessToken, dispatch]);

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
                <h1 className="text-4xl font-bold">All Stories</h1>
                <Link to="/stories/new" className="btn btn-primary text-white">
                    Create Story
                </Link>
            </div>

            {stories.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-xl text-base-content/60 mb-4">
                        No stories yet.{' '}
                        <Link to="/stories/new" className="btn btn-primary text-white">
                            Create your first story
                        </Link>
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {stories.map((story) => (
                        <div key={story.id} className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">
                                    {story.title}
                                </h2>
                                <p className="line-clamp-3">
                                    {story.content}
                                </p>
                                <div className="card-actions justify-end mt-4">
                                    <Link to={`/stories/${story.id}`} className="btn btn-sm btn-primary text-white">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) }
        </div>
    );
}