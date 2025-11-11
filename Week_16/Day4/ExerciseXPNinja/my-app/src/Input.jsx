import { useState } from "react";
import "./Form.css";

export default function Input({ label, name, value, onChange, onBlur, validate }){
    const [touched, setTouched] = useState(false);
    const showError = touched && typeof validate === 'function';
    const error = showError ? validate(value) : null;

    
    return (
        <label className="input-label">
            <span>{label}</span>
            <input 
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            onBlur={(e) => {setTouched(true); onBlur?.(e); }}
            />
            {error && <p className="error">{error}</p>}
        </label>
    );
}