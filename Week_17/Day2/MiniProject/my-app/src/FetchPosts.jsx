import { useState, useEffect } from "react";

export default function FetchPosts(){
    const [posts, setPosts] = useState([]);
    
    async function fetchApi(){
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
            if(!res.ok) throw new Error(`Failed request: ${res.status}`);
            const data = await res.json();
            setPosts(data);
        } catch (err){
            console.log(err);
        }
    }

    useEffect(() => {
        fetchApi();
    }, [])

    return (
        <>
        <div>
            <h1>List of posts' titles</h1>
            {posts.map(p => (
                <p key={p.id}>{p.title}</p>
            ))}
        </div>
        <div>
            <h1>List of Posts (Part III)</h1>
            {posts.map(p => (
                <div key={p.id} style={{ marginBottom: "50px"}}>
                    <p style={{ margin: "2px 0" }}><strong>ID:</strong> {p.id}</p>
                    <p style={{ margin: "2px 0" }}><strong>Title:</strong> {p.title}</p>
                    <p style={{ margin: "2px 0" }}><strong>Body:</strong> {p.body}</p>
                </div>
            ))}
        </div>

        </>
    );
}