// define the typescript interfaces (generic + type-safety)
import { useMemo, useState } from "react";

type Id = string | number;

export type SortDirection = "asc" | "desc";

export type SortConfig<T> = {
    key: keyof T;
    direction: SortDirection;
} | null;

export type TableColumn<T> = {
    // text in the header table
    title: string;
    
    // which property from the data item to show in this column - keyof means tat must be a real property key name from T
    key: keyof T;

    // if true, clicking the header can sort by the column
    sortable?: boolean

    // optional custom cell rendered, if provided this controls how the cell is displayed
    renderCell?: (item: T) => React.ReactNode;
};

export type DataTableProps<T extends { id: Id }> = {
    data: T[];
    columns: TableColumn<T>[];

    // optional: parent can be informed when sorting changes
    onSort?: (config: SortConfig<T>) => void;

    // optional: parent can be informed when selection changes
    onSelect?: (selectedItem: T[]) => void;
};

export function DataTable<T extends { id: Id}>({ data, columns, onSort, onSelect }: DataTableProps<T>) {

    const [sortConfig, setSortConfig] = useState<SortConfig<T>>(null);
    
    const sortedData = useMemo(() => {
        if (!sortConfig) return data;

        const { key, direction } = sortConfig;

        return [...data].sort((a, b) => {
            const aValue = a[key];
            const bValue = b[key];

            if (aValue > bValue) {
                return direction === "asc" ? 1 : -1;
            }

            return direction === "asc" ? -1 : 1;
        });
    }, [data, sortConfig]);


    function handleSort(columnKey: keyof T) {
        setSortConfig((prev) => {
            if (prev?.key === columnKey) {
                const nextDirection: SortDirection = prev.direction === "asc" ? "desc" : "asc";
                const next: SortConfig<T> = { key: columnKey, direction: nextDirection };
                onSort?.(next);
                return next;
            }

            const next: SortConfig<T> = { key: columnKey, direction: "asc" };
            onSort?.(next);
            return next;
        });
    }


    // add row selection state + helper logic
    const [selectedIds, setSelectedIds] = useState<Set<Id>>(new Set());
    const allSelected = sortedData.length > 0 && selectedIds.size === sortedData.length;

    function toggleRow(id: Id) {
        setSelectedIds((prev) => {
            const next = new Set(prev);

            if (next.has(id)) next.delete(id);
            else next.add(id);

            if (onSelect) {
                const selectedItems = sortedData.filter((item) => next.has(item.id));
                onSelect(selectedItems);
            }

            return next;
        });
    }

    function toggleAll() {
        setSelectedIds((prev) => {
            const next = new Set<Id>();

            if (!allSelected) {
                for (const item of sortedData) next.add(item.id);
            }

            if (onSelect) {
                const selectedItems = sortedData.filter((item) => next.has(item.id));
                onSelect(selectedItems);
            }

            return next;
        });
    }
    
    return (
        <>
        <h1>Data Table Exercise</h1>
        <table>
            <thead>
                <tr>
                    <th>
                        <input type="checkbox" checked={allSelected} onChange={toggleAll} />
                    </th>

                    {columns.map((col) => {
                        const isSorted = sortConfig?.key === col.key;
                        const arrow = isSorted ? (sortConfig?.direction === "asc" ? " ▲" : " ▼" ) : "";

                        return (
                            <th onClick={col.sortable ? () => handleSort(col.key) : undefined} > {col.title} {col.sortable && arrow} </th>
                        );
                    })}
                </tr>
            </thead>

            <tbody>
                {sortedData.map((item) => (
                    <tr key={String(item.id)} >
                        <td> 
                            <input type="checkbox" checked={selectedIds.has(item.id)} onChange={() => toggleRow(item.id)} />
                        </td>

                        {columns.map((col) => (
                            <td key={String(col.key)}>
                                {col.renderCell ? col.renderCell(item) : String(item[col.key])}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    );
}