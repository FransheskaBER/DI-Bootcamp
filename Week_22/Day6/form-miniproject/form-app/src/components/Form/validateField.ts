import type { FormField } from "./config";

interface ValidationResult {
    isValid: boolean;
    errors: string[];
}

export function validateField(field: FormField, value: string | boolean): ValidationResult {
    const errors: string[] = [];


    // 1. PATTERN VALIDATION (Regex)
    if (field.validation?.pattern && typeof value === 'string') {
        if (!field.validation.pattern.test(value)) {  // Test if value matches regex pattern
            errors.push(`Invalid ${field.label} format`);
        }
    }


    // 2. CUSTOM VALIDATION (Function)
    if (field.validation?.custom) {
        const customResult = field.validation.custom(value);  // Call custom function
        
        if (typeof customResult === 'string') {
            // Function returned error message
            errors.push(customResult);
        } else if (customResult === false) {
            // Function returned false (generic failure)
            errors.push(`Invalid ${field.label}`);
        }
        // If customResult === true, validation passed (no error)
    }

    // 3. MIN LENGTH VALIDATION - Only applies to string values
    if (field.validation?.minLength && typeof value === 'string') {
        if (value.length < field.validation.minLength) {
            errors.push(`Minimum ${field.validation.minLength} characters required`);
        }
    }

    // 4. MAX LENGTH VALIDATION- Only applies to string values
    if (field.validation?.maxLength && typeof value === 'string') {
        if (value.length > field.validation.maxLength) {
            errors.push(`Maximum ${field.validation.maxLength} characters allowed`);
        }
    }

    // 5. MIN VALUE VALIDATION (for number inputs)
    if (field.validation?.min !== undefined && field.type === 'number') {
        const numValue = typeof value === 'string' ? parseFloat(value) : value;
        if (typeof numValue === 'number' && !isNaN(numValue) && numValue < field.validation.min) {
            errors.push(`Minimum value is ${field.validation.min}`);
        }
    }

    // 6. MAX VALUE VALIDATION (for number inputs)
    if (field.validation?.max !== undefined && field.type === 'number') {
        const numValue = typeof value === 'string' ? parseFloat(value) : value;
        if (typeof numValue === 'number' && !isNaN(numValue) && numValue > field.validation.max) {
            errors.push(`Maximum value is ${field.validation.max}`);
        }
    }

    // 7. REQUIRED FIELD VALIDATION - Check if required field is empty
    if (field.required) {
        if (typeof value === 'string' && value.trim() === '') {
            errors.push(`${field.label} is required`);
        } else if (typeof value === 'boolean' && !value && field.type === 'checkbox') {
            errors.push(`${field.label} is required`);
        }
    }

    // Return validation result
    return {
        isValid: errors.length === 0,  // Valid if no errors accumulated
        errors                         // Array of all error messages
    };
}


export type { ValidationResult };