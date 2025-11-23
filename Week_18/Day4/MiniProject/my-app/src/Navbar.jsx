import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">Herolo Weather Task</span>
                <div className="collapse navbar-collapse justify-content-end" >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/favorites" className="nav-link">Favorites</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}