export default function Favorites({ favorites }) {
    return (
        <>
            {favorites.length > 0 && (
                <div className="container-fluid d-flex flex-column align-items-center gap-4 mt-4">
                    <h3>Your favourites</h3>
                    <div className="container text-center">
                        <div className="row justify-content-center g-3">
                            {favorites.map((fav) => (
                                <div className="col d-flex" key={fav.id}>
                                    <div className="card" style={{ width: "25rem", padding: "30px" }} key={fav.id}>
                                        <h3 className="card-title">{fav.city.toUpperCase()}</h3>
                                        <img
                                            src={`https://www.accuweather.com/assets/images/weather-icons/v2a/${fav.weather.weatherIcon}.svg`}
                                            alt="weathericon"
                                        />
                                        <div className="card-body">
                                            <h3>{fav.weather.temperature} °C</h3>
                                            <p className="card-text">{fav.weather.weatherText}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}