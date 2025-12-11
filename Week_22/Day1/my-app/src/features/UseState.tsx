import { useState } from "react";

type Todo = {
    id: number;
    text: string;
};

export default function UseState() {
    // const [enabled, setEnabled] = useState(false);
    // const [selectedUser, setSelectedUser] = useState<string | null>(null);
    const [todos, setTodos] = useState<Todo[]>([]);


    return (
        <>
        </>
    );

}