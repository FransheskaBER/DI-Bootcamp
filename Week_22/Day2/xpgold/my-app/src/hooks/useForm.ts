import { useState } from "react";


type Validator<T> = (values: T) => Partial<Record<keyof T, string>>; 

// the Record creates an object type with specific values types
// { keyName: string } so the value of the keyName is a string

// the keyof extracts the property names of the keys from type T as unions
// example:
// type Person = { name: string, age: number; };
// type PersonKeys = keyof Person; // 'name' | 'age'

// Partial<T> makes all properties optional
// so for example:
// Partial<{ name: string; email: string; }>
// equal to:
// { name?: string; email:? string }

interface UseFormOptions<T> {
    initialValues: T;
    validate: Validator<T>;
    onSubmit: (values: T) => Promise<void> | void;
};


// useForm is a generic Hook and generic means that works with ANY form shape (email, login, profile, etc)
export function useForm<T extends Record<string, any>>(options: UseFormOptions<T>) {

    // extract the options so we can use them directly
    const { initialValues, validate, onSubmit } = options;

    // store the current form values (email, password, etc)
    const [values, setValues] = useState<T>(initialValues);

    // store validation errors like { email: 'invalid email' }
    const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});

    // track which fields the user has interacted with
    const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({});

    // true while the form is being submitted
    const [isSubmit, setSubmit] = useState(false);
    
    // store an error message if submit fails
    const [submitError, setSubmitError] = useState<string | null>(null);
    
    // true when form submits successfully
    const [submitSuccess, setSubmitSuccess] = useState(false);


    // this function runs when the user types in an input and updates the value in the form state
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value, type, checked } = e.target;

        setValues((prev) => ({
            ...prev,
            // if the iput is a checkbox, store true/false - otherwise store the input value
            [name]: type === "checkbox" ? checked : value,
        }));
    }

    // when the user leaves an input (onBlur) , mark the field as touch and validate the form
    function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
        const { name } = e.target;

        setTouched((prev) => ({
            ...prev,
            [name]: true,
        }));

        // validate form and update errors
        const nextErrors = validate(values);
        setErrors(nextErrors);
    }


    // run this function when form is submitted, validate and runs onSubmit if valid
    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        setSubmitError(null);
        setSubmitSuccess(false);

        const nextErrors = validate(values);
        setErrors(nextErrors);

        // mark all fields as touch so errors show
        const allTouched: Partial<Record<keyof T, boolean>> = {};
        (Object.keys(values) as Array<keyof T>).forEach((key) => {
            allTouched[key] = true;
        });
        setTouched(allTouched);

        // if there are error stops submittion
        const hasErrors = Object.keys(nextErrors).length > 0
        if (hasErrors) return;

        try {
            // indicate submittion is in process
            setSubmit(true);

            // run the submit function (API call, fake delay)
            await onSubmit(values);

            // mark submittion as successfull
            setSubmitSuccess(true);
        } catch (error) {
            // if sth fails, store a readable message
            setSubmitError(
                error instanceof Error ? error.message : "Something went wrong"
            );
        } finally {
            // submission is finished
            setSubmit(false);
        }
    }

    // Reset the form back to its initial state
    function reset() {
        setValues(initialValues);
        setErrors({});
        setTouched({});
        setSubmitError(null);
        setSubmitSuccess(false);
        setSubmit(false);
    }


    // EXPORT EVERYTHING the component needs to use the form

    return {
        values, 
        errors, 
        touched, 
        isSubmit,
        submitError, 
        submitSuccess,
        handleChange, 
        handleBlur,
        handleSubmit,
        reset,
        setValues,
    };
}