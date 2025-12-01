import { useState } from "react";
import { updateQuantity } from "./inventorySlice.js";
import { useDispatch } from "react-redux";

export default function UpdateQuantity({ id, currentQuantity }) {
    const [editable, setEditable] = useState(false);
    const [newQuantity, setNewQuantity] = useState(currentQuantity) 
    const dispatch = useDispatch();

    function handleEdit() {
        if (!editable) {
            setEditable(true);
            return;
        }
        dispatch(updateQuantity({ id, updatedQuantity: Number(newQuantity) }));
        currentQuantity = newQuantity;
        setEditable(false);
    };

    return (
        <>
        {editable ? (
            <input type="number" value={newQuantity} onChange={(e) => setNewQuantity(e.target.value)} />
        ) : (
            <p>{currentQuantity}</p>
        )}
        <button onClick={handleEdit}>{editable ? "Save Changes" : "Edit Quantity"}</button>
        </>
    );
}