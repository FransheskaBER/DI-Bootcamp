import { useDispatch } from "react-redux";
import { addLike } from "./state/slice";
import { memo } from "react";

const emojis = { like: "👍" };

function LikeButton({ postId, reactions }) {
    console.log("render like => ", postId);
    
    const dispatch = useDispatch();

    const renderEmojis = Object.entries(emojis).map(([key, value]) => {
        return (
        <div key={postId} onClick={() => dispatch(addLike({ id: postId, name: key }))}>{value} {reactions[key]}</div>
        )
    }); 
    return <div>{renderEmojis}</div>;
}

export default memo(LikeButton);