export default function ErrorFallback({ error }){
    return(
        <div role="alert">
            <h2>Something Went Wrong!</h2>
            <pre>{error.message}</pre>
            <details>
                <summary>Stack trace</summary>
                <pre>{error.stack}</pre>
            </details>
        </div>
    );
}