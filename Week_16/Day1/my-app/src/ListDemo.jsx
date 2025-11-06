export default function ListDemo() {
    // let's define the array fo items
    const fruits = ['Apples', 'Bananas', 'Mangoes', 'Kiwis'];

    // return JSX
    return (
        <div>
            <h2>My Fruit List</h2>

            {/* Map through the array of fruits to render each item */}
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>

        </div>
    );
}