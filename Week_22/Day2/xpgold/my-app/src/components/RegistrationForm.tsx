import { useForm } from "../hooks/useForm";


type RegisterValues = {
    email: string;
    password: string;
};

export default function RegistrationForm() {

    // function to validation email/password and return error messages
    function validate(values: RegisterValues) {
        const errors: Partial<Record<keyof RegisterValues, string>> = {};

        // simple email check must include @ and a dot after it
        if (!values.email.trim()) {
            errors.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
            errors.email = "Please enter a validemail";
        }

        // password rules, required and minimum length
        if (!values.password) {
            errors.password = "Password required";
        } else if (values.password.length < 5) {
            errors.password = "Password must be at least 5 characters";
        }

        return errors;
    }


    // fake sybmit to simulate success/errors cases
    async function onSubmit(values: RegisterValues) {
        // simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 700));

        // simulate failure somethings
        if (values.email.toLowerCase().includes('fail')) {
            throw new Error("Server says no. Try different email");
        }

        // if we reach here success
        console.log("Registered:", values);
    }


    const form = useForm<RegisterValues>({
        initialValues: { email: "", password: "" },
        validate,
        onSubmit,
    });

    const showEmailError = form.touched.email && form.errors.email;
    const showPasswordError = form.touched.password && form.errors.password;


    return (
        <form onSubmit={form.handleSubmit}>
            <h3>Registration</h3>

            <div>
                <input type="email" name="email" value={form.values.email} onChange={form.handleChange} onBlur={form.handleBlur}/>
                {showEmailError ? (
                    <p>{form.errors.email}</p>
                ) : null}
            </div>

            <div>
                <input type="password" name="password" value={form.values.password} onChange={form.handleChange} onBlur={form.handleBlur}/>
                {showPasswordError ? (
                    <p>{form.errors.password}</p>
                ) : null}
            </div>

            <button type="submit" disabled={form.isSubmit}>
                {form.isSubmit ? "Submitting" : "Register"}
            </button>

            {form.submitSuccess ? (
                <p>Registration successful</p>
            ) : null}

            {form.submitError ? (
                <p>{form.submitError}</p>
            ) : null}
        </form>
    );
}