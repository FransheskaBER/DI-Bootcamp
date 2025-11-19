export default function PhotosGrid({ photos =[] }){
    return (
        <div>
        <h2>Pictures</h2>
            <div className="album">
            {photos.map(p => (
                <img className='photos' key={p.id} src={p.src.medium} alt={p.alt} />
            ))}
            </div>
        </div>
    );
}