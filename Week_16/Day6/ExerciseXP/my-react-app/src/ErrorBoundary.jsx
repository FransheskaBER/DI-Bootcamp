export default function ErrorFallback({ error }){
    return (
        <div role="alert">
            <h3>Something went wrong!</h3>
            <pre>{error.message}</pre>
        </div>
    );
}