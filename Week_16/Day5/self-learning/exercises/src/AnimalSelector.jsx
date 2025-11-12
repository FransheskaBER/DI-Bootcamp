export default function AnimalSelector({ animals, value, onChange }) {
    return (
        <select value={value} onChange={onChange}>
            <option>Select an animal...</option>
            {animals.map((animal, index) => (
                <option key={index} value={animal}>{animal}</option>
            ))}
        </select>
    );
}