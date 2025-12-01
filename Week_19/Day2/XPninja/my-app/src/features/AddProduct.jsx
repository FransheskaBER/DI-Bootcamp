import { addProduct } from "./inventorySlice.js";
import { useDispatch } from "react-redux";
import { useState } from "react";


export default function AddProduct ({ setAddBtn }) {
    const [form, setForm] = useState({ productName: "", quantity: 0 });
    const dispatch = useDispatch();

    function handleChange(e) {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newProduct = { ...form, id: Date.now() }
        dispatch(addProduct(newProduct));
        setAddBtn(false);
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Add a new product</h1>
                <div className="row">
                    <label>Product Name: <br /> 
                        <input type="text" name="productName" value={form.productName} onChange={handleChange} />
                    </label>
                </div>
                <div className="row">
                    <label>Quantity:<br />
                        <input type="number" name="quantity" value={form.quantity} onChange={handleChange} />
                    </label>
                </div>
                <button className="button-primary" type="submit">Add Product and Close</button>
            </form>
        </div>
    );
}