// -----------------------------------------------------------------------
// Important: USE useCallback ONLY WHEN YOU PASS THE CALLBACK TO CHILDREN.
// -----------------------------------------------------------------------

import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";

// handleClick will be the same function on every render
const handleClick = useCallback(() => {
    console.log("click");
}, []);

// useCallback + Redux dispatch
const dispatch = useDispatch();

// here the handleClick2 function will only change if dispatch changes (which is basically never)
// if you pass this function to a memoize child, that child wont re-rendered unnecesarily.
const handleClick2 = useCallback(
    (postId) => {
        dispatch(likePost(postId));
    },
    [dispatch]
);

// callback with conditions:
const handleAction = useCallback(
    (postId, isLiked) => {
        if (isLiked) {
            dispatch(dislikePost(postId));
        } else {
            dispatch(likePost(postId));
        }
    },
    [dispatch]
);

// use createSelector with dependencies/arguments like category, id, etc..
// imagine we have this redux state:
state ={
    posts: [
        { id: 1, title: "A", category: "tech" },
        { id: 2, title: "B", category: "travel" },   
    ]
};

// we want all posts for a given category:
// pattern 1: selector with arguments
const selectPosts = state => state.posts;

// second input selector receives state and category
const selectPostsByCategory = createSelector(
    [selectPosts, (state, category) => category],
    (posts, category) => posts.filter(post => post.category === category)
);

// in the component:
const PostList = ({ category }) => {
    const posts = useSelector(state => selectPostsByCategory(state, category));
    // render posts...
};


// EXERCISE 1:
state = {
    todos: [
        { id: 1, text: "Buy milk", done: false },
        { id: 2, text: "Walk the dog", done: true },
        { id: 3, text: "Study Redux", done: false }
    ]
}
// action:
toggleTodo(id)

// parent component:
export function TodoList() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const handleToggle = useCallback(
        (todoId) => {
            dispatch(toggleTodo(todoId));
        },
        [dispatch] // this is the dependency array of useCallback
    );

    return (
        <>
        {todos.map(t => (
            <TodoItem key={t.id} t={t} onToggle={handleToggle} />
        ))}
        </>
    );
}

// child component:
function TodoItem({ t, onToggle }) {
    return <li onClick={() => onToggle(t.id)}>{t.text}</li>;
};
export default React.memo(TodoItem); // the React.memo shoudl wrap the component