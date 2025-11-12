export default function ErrorFallBack({ error }) {
    return (
        <div role="alert">
            <p>Something went wrong!</p>
            <pre>{error.message}</pre>
        </div>
    );
}