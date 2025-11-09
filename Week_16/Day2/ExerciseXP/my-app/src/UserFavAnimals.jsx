export default function UserFavAnimals({ favAnimals }) {
    return (
        <ul>
            {favAnimals.map((animal, index) => (
                <li key={index}>{animal}</li>
            ))}
        </ul>
    );
}