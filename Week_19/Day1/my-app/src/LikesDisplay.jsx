import { useSelector, useDispatch } from "react-redux";
import { addOne, addMany } from "./features/likes/likeSlice.js";

export default function LikesDisplay() {
    const likes = useSelector(state => state.likes.items);
    const dispatch = useDispatch();

    return (
        <>
        <button onClick={() => dispatch(addOne()) }>Add 1</button>
        <button onClick={() => dispatch(addMany(5))}>Add 5</button>
        <div>
            <p>Total Likes: {likes}</p>
        </div>
        </>
    );
}