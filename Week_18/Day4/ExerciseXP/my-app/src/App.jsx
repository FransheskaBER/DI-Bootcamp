import './App.css';
import { ThemeProvider } from "./ThemeContext.jsx";
import ThemeSwitcher from './ThemeSwitcher.jsx';
import TextCounter from './TextCounter.jsx';


function App() {

  return (
    <>
    <ThemeProvider>
      <ThemeSwitcher/>
    </ThemeProvider>
    <hr />
    <TextCounter />
    </>
  )
}

export default App
