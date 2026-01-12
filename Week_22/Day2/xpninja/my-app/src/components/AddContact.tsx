import { useContacts } from "../context/contactContext";

export default function AddContact() {
    const { state, dispatch } = useContacts();

    return (
        <button onClick={() => dispatch({ type: "addContact", payload: { id: state.contacts.length + 1, name: "Fran", email: "example@email.com" } })}>
            Add Contact (already defined)
        </button>
    );
}