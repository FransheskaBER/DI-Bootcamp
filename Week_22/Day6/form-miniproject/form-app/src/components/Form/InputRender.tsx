import { type FormField } from "./config";

interface InputRenderProps {
    field: FormField;
    value: string | boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    onBlur?: () => void;
}

export function InputRender({ field, value, onChange, onBlur }: InputRenderProps) {
    switch (field.type) {
        case 'text':
        case 'email':
        case 'password':
        case 'number':
            return (
                <input 
                    type={field.type}
                    placeholder={field.placeholder}
                    required={field.required}
                    disabled={field.disabled}
                    value={value as string}
                    onChange={onChange}
                    onBlur={onBlur}   
                />
            );
        case 'checkbox':
            return (
                <input 
                    type="checkbox"                     // Always "checkbox"
                    required={field.required}
                    disabled={field.disabled}
                    checked={value as boolean}          // Checkbox uses 'checked', not 'value'
                    onChange={onChange}            // Will need special handling in parent
                    onBlur={onBlur}
                />
            );
        case 'select':
            return (
                <select
                    value={value as string}
                    required={field.required} 
                    disabled={field.disabled}
                    onChange={onChange}
                    onBlur={onBlur}
                >
                    {field.options?.map((o) => (
                        <option key={o.value} value={o.value}>
                            {o.label}
                        </option>
                    ))}
                </select>
            );
        case 'textarea':
            return (
                <textarea 
                    placeholder={field.placeholder}
                    required={field.required}
                    disabled={field.disabled}
                    value={value as string}
                    onChange={onChange}
                    onBlur={onBlur}
                    rows={4}   
                />
            );
        default:
            return <p>Unsupported field type: {field.type}</p>;
    }
}
