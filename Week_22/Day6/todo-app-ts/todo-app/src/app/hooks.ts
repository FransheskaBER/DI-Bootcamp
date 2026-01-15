import type { RootState, AppDispatch } from "./store";
import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
import { addTodo, removeTodo, toggleTodo, setFilter, type Filter } from "./todosSlice";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAddTodo = () => {
    const dispatch = useAppDispatch();
    return (title: string) => {
        dispatch(addTodo(title));
    };
}

export const useRemoveTodo = () => {
    const dispatch = useAppDispatch();
    return (id: string) => {
        dispatch(removeTodo(id));
    };
}

export const useToggleTodo = () => {
    const dispatch = useAppDispatch();
    return (id: string) => {
        dispatch(toggleTodo(id));
    };
}

export const useSetFilter = () => {
    const dispatch = useAppDispatch();
    return (filter: Filter) => {
        dispatch(setFilter(filter));
    };
}

export const useFilteredTodos = () => {
    const todos = useAppSelector((state) => state.todos.todos);
    const filter = useAppSelector((state) => state.todos.filter);
    if (filter === "all") return todos;
    if (filter === "completed") return todos.filter((t) => t.done);
    if (filter === "incompleted") return todos.filter((t) => !t.done);
    return todos;
}

export const useFilter = () => {
    return useAppSelector((state) => state.todos.filter);
}

export const useTodos = () => {
    return useAppSelector((state) => state.todos.todos);
}