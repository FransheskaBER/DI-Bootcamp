import { useState } from "react";
import { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "addItem":
            return {
                ...state, // keep existing cart structure
                items: [...state.items, action.payload],
                total: state.total + action.payload.price
            };
        case "removeItem":
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id),
                total: state.total - action.payload.price
            };
        case "clearAll":
            return { items: [], total: 0 };
        default:
            return state;
    }
}

export default function ShoppingCart() {
    const [cart, dispatch] = useReducer(reducer, { items: [], total: 0 });
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);


    return (
        <>
        <h1>Shopping cart</h1>
        <p>Total: {cart.total}</p>
        <ul>
            {cart.items.map((item) => (
                <div key={item.id}>
                    <li>Item: {item.name} - Price: {item.price}</li>
                    <button onClick={() => {
                        dispatch({
                            type: "removeItem",
                            payload: {
                                id: item.id,
                                price: item.price,
                            }
                        })
                    }}>Delete {item.name}</button>
                </div>
        ))}
        </ul>
        <div>
            <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(Number(e.target.value))}/>
            <button onClick={() => {
                dispatch({
                    type: "addItem",
                    payload: {
                        id: Date.now(),
                        name,
                        price,
                    }
                });
                setName("");
                setPrice(0);
            }}
            >Add Item</button>
        </div>
        <button onClick={() => dispatch({ type: "clearAll" })}>Clear Shopping Cart</button>
        </>
    );
}