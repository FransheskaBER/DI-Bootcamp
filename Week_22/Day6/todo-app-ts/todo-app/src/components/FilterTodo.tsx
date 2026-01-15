import { useFilter, useSetFilter } from "../app/hooks";
import { type Filter } from "../app/todosSlice";

export default function FilterTodo() {
    const filter = useFilter();
    const setFilter = useSetFilter();

    function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
        setFilter(e.target.value as Filter);
    }

    return (
        <>
        <h1>Your Todo-List</h1>

        <div>
            <label>Filter 
                <select name="filter" value={filter} onChange={handleChange} style={{ marginLeft: '5px' }}>
                    <option value="all">All</option>
                    <option value="completed">Completed tasks</option>
                    <option value="incompleted">Incompleted tasks</option>
                </select>
            </label>
        </div>
        </>
    );
}