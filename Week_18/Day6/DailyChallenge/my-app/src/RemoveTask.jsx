import { useDispatch} from "react-redux";
import { remove } from "./store/slice";

export default function RemoveTask({ id }) {
    const dispatch = useDispatch();

    function handleRemove(){
        dispatch(remove(id));
    }
    return (
        <button onClick={handleRemove}>Remove Task</button>
    );
}