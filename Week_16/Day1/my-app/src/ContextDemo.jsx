import { createContext, useContext, useState } from "react";

// create context first:
const ThemeContext = createContext(null);

// provide the context to children:
export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => setTheme(theme => (theme === 'light' ? 'dark' : 'light'));
    const value = { theme, toggleTheme };
    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

// a child the consumes the context:
function ThemePanel() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const isLight = theme === 'light';

    return (
        <div
        style={{
            padding: 12, 
            borderRadius: 8, 
            background: isLight ? '#f5f5f5' : '#222',
            color: isLight ? '#222' : '#f5f5f5',
        }}
        >
            <h2>ContextDemo</h2>
            <p>Current theme: <b>{theme}</b></p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}

export default function ContextDemo() {
    return <ThemePanel />;
}