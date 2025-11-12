export default function Car({ selectedBrand, cars }) {
    const message = 
        !selectedBrand
            ? "Pick a brand to see availability"
            : cars.length > 1
            ? `Here are all the ${selectedBrand} cars available in the shop`
            : cars.length === 1
            ? `Here is the only ${selectedBrand} car available in the shop`
            : `No ${selectedBrand} car currently available in the shop`;
    
    return (
        <div>
            <h1>{message}</h1>
            {cars.map((item) => (
                <ul key={item.id}>
                    <li>Brand: {item.brand}</li>
                    <li>Name: {item.name}</li>
                    <li>Year of creation: {item.year}</li>
                    <li>Origin: {item.origin}</li>
                </ul>
            ))}
        </div>
    );
}