import { type ReactElement, type ReactNode } from "react";

type ListPropsGeneric<T> = {
    items: T[];
}

const List = <T,>({items}: ListPropsGeneric<T>): ReactElement => {
    return (
        <>
        <h2>List using Generic Items</h2>
        {/* Assume you are getting an array of items */}
        {
            items && items.map((item, index) => {
                return <div key={index}>{item as ReactNode}</div>;
            })
        }
        </>
    );
}

export default List;