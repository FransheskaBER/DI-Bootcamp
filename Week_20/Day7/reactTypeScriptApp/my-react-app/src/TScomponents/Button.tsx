type ButtonProps = {
    label: string;
    disabled?: boolean;
};

function Button({ label, disabled = false }: ButtonProps) {
    return <button disabled={disabled}>{label}</button>;
}

export default Button;

