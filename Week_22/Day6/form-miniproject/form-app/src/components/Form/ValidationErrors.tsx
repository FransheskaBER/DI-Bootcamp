interface ValidationErrorsProps {
    errors: string[];      
    touched: boolean;      
}

export function ValidationErrors({ errors, touched }: ValidationErrorsProps) {
    if (!touched || errors.length === 0) {
        return null;
    }

    return (
        <div style={{ color: "red" }}>
            {errors.map((error, index) => (
                <p key={index}>{error}</p>
            ))}
        </div>
    );
}