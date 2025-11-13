export default function ErrorFallback({ error }){
  return (
    <div className="text-danger" role="alert">
        <h2 style={{ color: "red" }}>Something Went Wrong!</h2>
        <p style={{ color: "red" }}>{error.message}</p>
        <button type="button" className="btn btn-link" onClick={() => window.location.reload()}>Refresh Page</button>
    </div>
  );
}