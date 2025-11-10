import { useState, useEffect } from "react";

export default function PostsByUser(){
    const [userId, setUserId] = useState(1);
    const [posts, setPost] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchPosts(){
            try {
                setLoading(true);
                setError(null);

                const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

                if (!res.ok) {
                    throw new Error(`Request failed: ${res.status}`);
                }

                const data = await res.json();
                setPost(data)
            } catch (err){
                setError(err.message || "Something went wrong");
            } finally {
                setLoading(false);
            }
        }

        fetchPosts();
    }, [userId]);

    return (
        <div>
            <h2>Posts by User</h2>

            <label htmlFor="userId">User: </label>
            <select name="userid" id="userid" value={userId} onChange={(e) => setUserId(Number(e.target.value))}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>

            {loading ? <p>Loading...</p> : null}
            {/* {loading && <p>Loading...</p>} */}
            
            {error && <p style={{ color: "red" }}>{error}</p>}

            <ul>
                {posts.map((p) => (
                    <li key={p.id}>{p.title}</li>
                ))}
            </ul>
        </div>
    );
}