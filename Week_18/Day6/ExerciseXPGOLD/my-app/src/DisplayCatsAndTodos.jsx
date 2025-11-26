import { useState } from "react";
import { useSelector } from "react-redux";
import CompleteTask from "./CompleteTask.jsx";
import RemoveTask from "./RemoveTask.jsx";
import AddTask from "./AddTask.jsx";
import CreateCat from "./CreateCat.jsx";
import DeleteAll from "./DeleteAll.jsx";

export default function DisplayCatsAndTodos() {
    const cats = useSelector(state => state.categories);
    const [selectedCat, setSelectedCat] = useState("")

    const currentCat = cats.find(cat => String(cat.id) === String(selectedCat));

    return (
        <>
            {cats.length > 0 ? (
                <>
                <h2>Create more categories:</h2><CreateCat />
                <hr />
                <h3>To manage your todo-list, choose a category</h3>
                <select value={selectedCat} onChange={(e) => setSelectedCat(e.target.value)}>
                    <option value="">Select a category</option>
                    {cats.map(c => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                </select>
                </>
            ) : (
                <div>
                    <h2>Create your first category</h2>
                    <CreateCat />
                </div>
                
            )}

            <div>
                {selectedCat !== "" && currentCat && (
                    <div className="todosTable">
                        <h2>Your to-do list in "{currentCat.name}"</h2>
                        {currentCat.todos.length > 0 ? (
                            <>
                            <h4>Add task</h4>
                            <AddTask catId={currentCat.id}/>
                            {currentCat.todos.map(t => (
                            <div key={t.id}>
                                <CompleteTask catId={currentCat.id} todoId={t.id} complete={t.completed}/>
                                <label className={`textInput ${t.completed ? "completed" : ""}`}>{t.title}</label>
                                <RemoveTask catId={currentCat.id} todoId={t.id}/>
                            </div>
                            ))}
                            <DeleteAll catId={currentCat.id}/>
                            </>
                        ) : (
                            <div>
                                <h4>Add your first task</h4>
                                <AddTask catId={currentCat.id}/>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </>
    );
}