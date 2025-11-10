import './App.css'
import Car from './Car.jsx';
import Events from './Events.jsx';
import Phone from './Phone.jsx';
import Color from './Color.jsx';

function App() {
  const carInfo = {name: "Ford", model: "Mustang"};

  return (
    <>
    {/* Exercise 1 */}
    <Car model={carInfo.model}/>

    {/* Exercise 2 */}
    <Events />

    {/* Exercise 3 */}
    <Phone />

    {/* Exercise 4 */}
    <Color />
    </>
  )
}

export default App
