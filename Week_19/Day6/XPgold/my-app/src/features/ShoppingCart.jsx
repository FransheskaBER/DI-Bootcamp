import { addToCart } from "./shoppingCartSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { selectAvailableProducts, selectCartItems, calculateTotalPrice } from "./shoppingCartSlice.js";

export default function ShoppingCart() {
    const dispatch = useDispatch();
    const inStockProducts = useSelector(selectAvailableProducts);
    const cartItems = useSelector(selectCartItems);
    const totalPrice = useSelector(calculateTotalPrice);

    return (
        <>
        <h1>List of Available Products</h1>
        <div>
            {inStockProducts.map(p => (
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <p>{p.title} - Price: {p.price} - inStock: {p.inStock}</p>
                    <button onClick={() => dispatch(addToCart({ id: p.id, name: p.title, quantity: 1 }))}>Add to Cart</button>
                </div>
            ))}
        </div>
        <div>
            <h1>Your Shopping Cart</h1>
            <ul>
                {cartItems.map(i => (
                    <li>{i.name} - {i.quantity}</li>
                ))}
            </ul>
            <h2>Total price: {totalPrice.toFixed(2)}</h2>
        </div>
        </>
    );
}