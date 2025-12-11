import { useContext, useState, createContext } from "react";

// // context holds an OBJECT
// interface ThemeContextValue {
//     theme: "light" | "dark";
//     toggleTheme: () => void;
// }

// // create context and apply the interface
// const ThemeContext = createContext<ThemeContextValue | null>(null);

// // create a custom hook to ensure safe usage
// function useTheme() {
//     const ctx = useContext(ThemeContext);
//     if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
//     return ctx;
// }

// Create a typed ThemeProvider is the MODERN WAY
type Theme = "light" | "dark";

interface ThemeContextValue {
    theme: Theme;
    toggleTheme: () => void;
}
// we use sth | null > If the provider is missing → context is null
const ThemeContext = createContext<ThemeContextValue | null>(null);


export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>("light");

    function toggleTheme() {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

// custom hook that throws a custom error instead of a silent break
export function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
    return ctx;
}