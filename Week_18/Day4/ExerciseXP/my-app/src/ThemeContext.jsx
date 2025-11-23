import { createContext, useState } from "react";

// Create a context and give it a default shape: an object with a theme plus an empty function toggleThem
// (empty so code wont crashed if this fucntion is used witthout the Provider)
export const ThemeContext = createContext({
    theme: "light",
    toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
    // children here is like the props (other components) that will have access to the context inside the THEMEPROVIDER
    
    const [theme, setTheme] = useState("light");

    // define a function that flips the theme:
    function toggleTheme() {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }

    // Prepare a single object to pass to Provider so consumers can get both values
    const contextValue = { theme, toggleTheme };

    // passing children we make all descendants have access to the context
    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
}
