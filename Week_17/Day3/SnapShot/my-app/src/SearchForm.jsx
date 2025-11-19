export default function SearchForm({ handleSubmit, handleChange, input }){
    return (
        <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input className="form-control me-2" type="search" placeholder="e.g., Nature" aria-label="Search" name="input" value={input} onChange={handleChange} />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    );
}