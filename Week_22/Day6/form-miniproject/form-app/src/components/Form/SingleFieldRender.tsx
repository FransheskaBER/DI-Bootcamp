import { useState } from "react";
import { InputRender } from "./InputRender";
import { validateField } from "./validateField";
import { ValidationErrors } from "./ValidationErrors";
import { type FormField } from "./config";


interface Props {
    field: FormField;  
}


export function SingleFieldRenderer({ field }: Props) {
    const [value, setValue] = useState<string | boolean>(field.defaultValue || "");
    const [touched, setTouched] = useState(false);

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
        // Check if this is a checkbox input
        if (e.target instanceof HTMLInputElement && e.target.type === "checkbox") {
            setValue(e.target.checked);  // Checkbox: use checked property (boolean)
        } else {
            setValue(e.target.value);    // Other inputs: use value property (string)
        }
    }

    function handleBlur() {
        setTouched(true);
    }

    const validation = validateField(field, value);

    return (
        <div style={{ marginBottom: "16px" }}>
            <label>{field.label}
                {field.required && (
                    <span style={{ color: "red", marginLeft: "4px" }}>*</span>
                )}
            </label>

            {/* Render the appropriate input element */}
            <InputRender
                field={field}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
            />

            <ValidationErrors 
                errors={validation.errors}
                touched={touched}
            />
        </div>
    );
}