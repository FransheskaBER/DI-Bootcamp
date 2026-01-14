import { useFilter, useSetFilter } from "../app/hooks";

const FilterBooks = () => {
    const filter = useFilter();
    const setFilter = useSetFilter();

    function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
        setFilter(e.target.value as "all" | "read" | "unread");
    }

    return (
        <select name="filter" value={filter} onChange={handleChange}>
            <option value="all">All</option>
            <option value="read">Read books</option>
            <option value="unread">Unread books</option>
        </select>
    );
}

export default FilterBooks;