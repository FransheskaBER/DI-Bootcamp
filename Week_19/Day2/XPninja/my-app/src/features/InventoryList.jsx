import AddProduct from "./AddProduct";
import { useSelector } from "react-redux";
import RemoveProduct from "./RemoveProduct.jsx";
import UpdateQuantity from "./UpdateQuantity.jsx";
import { useState } from "react";

export default function InventoryList() {
    const [addBtn, setAddBtn] = useState(false);
    const products = useSelector(state => state.inventory);
    
    return (
        <>
        <button onClick={() => setAddBtn(true)}>Add New Product</button>
        {addBtn && (
            <AddProduct setAddBtn={setAddBtn}/>
        )}
        <br></br><hr />
        <h1>Your Products</h1>
        {products && (
            products.map(p => (
                <div key={p.id}>
                    <p>{p.productName}</p>
                    <UpdateQuantity id={p.id} currentQuantity={p.quantity} />
                    <RemoveProduct id={p.id} />
                </div>
            ))
        )}
        </>
    );
}