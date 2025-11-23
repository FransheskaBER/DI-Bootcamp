import { useContext } from "react";
import { ThemeContext } from "./ThemeContext.jsx";

export default function ThemeSwitcher() {
    const { theme, toggleTheme} = useContext(ThemeContext);
    
    return (
        <>
        <div style={{ width: "100%", height: "10vh", backgroundColor: theme === "light" ? "lightblue" : "black" }}></div>
        <button onClick={toggleTheme}>Switch to {theme === "light" ? "dark" : "light"}</button>
        </>
        
    );
}