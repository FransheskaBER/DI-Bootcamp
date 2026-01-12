import { useContacts } from "../context/contactContext";

export default function ContactList() {
    const { state, dispatch } = useContacts();

    if (state.contacts.length === 0) {
        return <p>No contacts yet.</p>;
    }

    return (
        <>
        <h4>Exercise 4</h4>
        <div>
            <p>Contacts:</p>
            <ul>
                {state.contacts.map((c) => (
                    <li key={c.id}>
                        {c.name} - {c.email}
                        <button onClick={() => dispatch({ type: "removeContact", payload: { id: c.id }})}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
        </>
    );
}