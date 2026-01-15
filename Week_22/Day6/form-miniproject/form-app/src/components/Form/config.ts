interface SelectOption {
    value: string;
    label: string;
}

// all possible input types our form supports:
type InputType = 'text' | 'email' | 'password' | 'number' | 'select' | 'textarea' | 'checkbox';

// validation rules that can apply to any field
interface ValidationRules {
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    min?: number;
    max?: number;
    custom?: (value: any) => boolean | string; //function that return true valid or error message
}

interface FormField {
    name: string;
    type: InputType;
    label: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    options?: SelectOption[];
    validation?: ValidationRules;
    defaultValue?: any;
}

// conplete form config
interface FormConfig {
    fields: FormField[];
}


// CREATE THE ACTUAL CONFIG
const loginFormConfig: FormConfig = {
    fields: [
        {
            name: "email",
            type: "email",
            label: "Email Address",
            placeholder: "name@example.com",
            required: true,
            validation: {
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                maxLength: 100
            }
        },
        {
            name: "password",
            type: "password",
            label: "Password",
            placeholder: "secret12345",
            required: true,
            validation: {
                minLength: 8,
                custom: (value: string) => {
                    if (!/[0-9]/.test(value)) {
                        return "Password must contain at least one number"
                    }
                    return true;
                }
            }
        },
        {
            name: "confirmPassword",
            type: "password",
            label: "Confirm Password",
            placeholder: "Re-enter your password",
            required: true,
            validation: {
                custom: (value: string, formData?: any) => {
                    if (value !== formData?.password) {
                        return "Passwords do not match."
                    }
                    return true;
                }
            } 
        },
        {
            name: "country",
            type: "select",
            label: "Country",
            required: true,
            options: [
                { value: "", label: "--Select Country--" },
                { value: "us", label: "United States" },
                { value: "il", label: "Israel" },
                { value: "es", label: "Spain" },
            ],
            defaultValue: ""
        },
        {
            name: "age",
            type: "number",
            label: "Age",
            placeholder: "18",
            required: false,
            validation: {
                min: 18,
                max: 120,
            }
        },
        {
            name: "bio",
            type: "textarea",
            label: "Bio",
            placeholder: "Tell us about yourself...",
            required: false,
            validation: {
                maxLength: 500,
            }
        },
        {
            name: "agreeToTerms",
            type: "checkbox",
            label: "I agree to the terms and conditions.",
            required: true,
            validation: {
                custom: (value: boolean) => {
                    if (!value) {
                        return "You must agree to the terms."
                    }
                    return true;
                }
            }
        }
    ]
};

export { loginFormConfig };
export type { FormConfig, FormField, ValidationRules, SelectOption, InputType };
