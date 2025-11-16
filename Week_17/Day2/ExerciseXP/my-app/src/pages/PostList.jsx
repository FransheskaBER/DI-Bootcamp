import posts from "./posts.json";

export default function PostList(){
    return (
        <div>
            <h1>All Posts</h1>
            {posts.map(post => (
                <div key={post.id}>
                    <h3>Title: {post.title}</h3>
                    <p>Content: {post.content}</p>
                </div>
            ))}
        </div>
    );
}