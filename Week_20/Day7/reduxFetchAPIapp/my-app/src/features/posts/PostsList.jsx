import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./state/slice";
import { useEffect } from "react";
import LikeButton from "./LikeButton";

export default function PostsList() {
    const posts = useSelector((state) => state.postsReducer.posts);
    const status = useSelector((state) => state.postsReducer.status);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts())
    }, []);

    if (status === "loading") return <h2>Loading...</h2>
    if (status === "error") return <h2>Oops...</h2>


    return(
        <>
        <h1>Posts</h1>
        <section>
        {posts && posts.map(post => {
            return (
                <article key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <LikeButton postId={post.id} reactions={post.reactions}/>
                </article>
            )
        })}
        </section>
        </>
    );
}