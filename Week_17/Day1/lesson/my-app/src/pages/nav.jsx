import { Link } from "react-router";

export default function Nav(){
    return (
        <header>
            <nav style={{ display: "flex", gap: "10px" }}>
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/shop'}>Shop</Link>
            </nav>
        </header>
    );
}