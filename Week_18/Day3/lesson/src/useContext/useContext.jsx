// you can pass data with other components without passing props down every level.
// example:
import { createContext, useContext } from "react";

export const ThemeContext = createContext();

export function Page(){
  const theme = useContext(ThemeContext);
  return <h1>Theme is: {theme}</h1>;
}