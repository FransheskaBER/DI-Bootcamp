export default function BootstrapList({planets}) {
    return (
        <ul className="list-group">
            {planets.map((p) => (
                <li className="list-group-item" key={p}>{p}</li>
            ))}
        </ul>
    );
}