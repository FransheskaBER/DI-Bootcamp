import { Link, useSearchParams } from "react-router";

const products = [
    {id: 1, name: "iPhone15"},
    {id: 2, name: "iPad1"},
    {id: 3, name: "Apple Watch"},
    {id: 4, name: "Headphones"},
]

export default function Shop(){
    const [ query ] = useSearchParams();
    console.log(query.get('a'));
    

    return (
        <div>
            <h1>Shop Page</h1>
            {products.map(product => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <Link to={`/product/${product.name}`}>Buy Now</Link>
                </div>
            ))}
        </div>
    );
}