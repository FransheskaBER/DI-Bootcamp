export default function SearchCar({ brands, value, onChange }) {
    return (
        <select id="brandSelect" value={value} onChange={onChange}>
            <option value="">Choose a brand...</option>
            {brands.map((brand) => (
                <option key={brand} value={brand}>{brand}</option>
            ))}
        </select>
    );
}