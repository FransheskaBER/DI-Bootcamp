import './App.css'
import { SingleFieldRenderer } from './components/Form/SingleFieldRender';
import { loginFormConfig } from './components/Form/config';


function App() {
    // Get individual fields from config for testing
    const emailField = loginFormConfig.fields[0];
    const passwordField = loginFormConfig.fields[1];
    const countryField = loginFormConfig.fields[3];
    const bioField = loginFormConfig.fields[5];
    const termsField = loginFormConfig.fields[6];

    return (
        <div style={{ maxWidth: "500px", margin: "40px auto", padding: "20px" }}>
            <h1>Form Example</h1>
            
            {/* Test individual fields */}
            <SingleFieldRenderer field={emailField} />
            <SingleFieldRenderer field={passwordField} />
            <SingleFieldRenderer field={countryField} />
            <SingleFieldRenderer field={bioField} />
            <SingleFieldRenderer field={termsField} />

            {/* Or render all fields dynamically */}
            {/* 
            {loginFormConfig.fields.map((field) => (
                <SingleFieldRenderer key={field.name} field={field} />
            ))}
            */}
        </div>
    );
}

export default App;
