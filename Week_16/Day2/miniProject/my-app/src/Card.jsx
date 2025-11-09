export default function Card({iconClass, title, imageUrl, description}){
    return (
        <div className="card mb-3">
            <div className="d-flex flex-column flex-md-row align-items-center gap-3 p-3">
                <i className={iconClass} style={{ fontSize: '8rem', color: 'orangered', marginRight: '0.5rem' }}></i>
                <img src={imageUrl} className="img-fluid rounded" alt="" style={{ height: '50px', width: '50px'}}/>
                <div className="text-center text-md-start">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    );

}