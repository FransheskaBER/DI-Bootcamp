export default function CompleteTodo({ checked, handleChange }) {
    return (
        <input type="checkbox" checked={checked} onChange={handleChange} />
    );
}