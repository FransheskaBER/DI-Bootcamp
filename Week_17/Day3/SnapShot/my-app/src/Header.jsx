import logo from './logo.png';

export default function Header(){
    return(
        <header>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                <a className="navbar-brand d-flex align-items-center gap-3" href="#">
                    <img src={logo} alt="Logo" width="100" height="100" className="d-inline-block align-text" />
                    SnapShot
                </a>
                </div>
            </nav>
        </header>
    );
}