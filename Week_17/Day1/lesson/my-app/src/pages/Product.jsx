import { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router";

export default function Product(){
    const { name } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => { navigate("/") }, 5000);
    }, [])

    return (
        <>
        <h1>Product {name}</h1>
        <Link to={'/shop'}>Continue Shopping</Link>
        <button onClick={() => navigate('/')}>Go Home</button>
        </>
    );   
}