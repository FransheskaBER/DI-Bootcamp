export default function InputWithLabel({ id, label, type, value, onChange }){
    return (
        <>
        <label htmlFor={id}>{label}</label>
        {
        type === "textarea" ? (
            <textarea id={id} value={value} onChange={onChange}></textarea>
        ) : (
            <input id={id} type={type} value={value} onChange={onChange} />
        )
        }
        </>
    );
}