import { useDispatch } from "react-redux";
import { deleteAll } from "../store/todoSlice.js";

export default function DeleteAll({ catId }) {
    const dispatch = useDispatch();

    function handleDelete() {
        dispatch(deleteAll({ catId }));
    }

    return (
        <button onClick={handleDelete}>Delete All Tasks</button>
    );
}