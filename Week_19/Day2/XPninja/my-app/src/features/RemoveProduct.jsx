import { removeProduct } from "./inventorySlice";
import { useDispatch } from "react-redux";

export default function RemoveProduct({ id }) {
    const dispatch = useDispatch();

    function handleRemove() {
        dispatch(removeProduct(id))
    };

    return (
        <button onClick={handleRemove}>Remove Product</button>
    );
}