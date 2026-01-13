export type Book = {
    id: number;
    title: string;
    author: string;
};

interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
    getKey: (item: T) => string | number;
};

export function GenericList<T>(props: ListProps<T>) {
    return props.items.map((i) => (
        <div key={props.getKey(i)}>
            {props.renderItem(i)}
        </div>
    ));
};
