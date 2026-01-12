import { useDataFetching } from "../hooks/useDataFetching";

type User = {
    id: number;
    name: string;
    email: string;
};

export function UserList() {
    const { data: users, loading, error, refetch, invalidateCache, source, recheck } = useDataFetching<User[]>("https://jsonplaceholder.typicode.com/users", {
        maxAge: 5 * 60 * 1000, // 5 minutes
    });

    return (
        <>
        <h1>Data Fetching + Cache Demo Exercise</h1>

        <p>Source: {source ?? "none yet"}</p>
                
        <div>
            <button onClick={() => refetch()} disabled={loading}>
                Refresh (bypass cache)
            </button>
        

            <button onClick={() => { invalidateCache(); refetch(); }} disabled={loading}>
                Clear Cache and Refresh
            </button>
        </div>

        {loading && <p>Loading users…</p>}

        {error && (
            <div>
                <p>Error: {error}</p>
                <button onClick={() => refetch()}>
                    Retry
                </button>
            </div>
        )}

        <div>
            <button onClick={() => recheck()} disabled={loading}>
                Recheck (use cache if valid)
            </button>
        </div>

        {!loading && !error && users && (
            <>
            <ul>
                {users.map((u) => (
                    <li key={u.id}>{u.name} -  {u.email}</li>
                ))}
            </ul>
            </>
        )}
        </>
    );
}