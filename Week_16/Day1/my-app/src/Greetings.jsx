// you define the component react with a function (Greeting) that accepts an input (props)
function Greeting(props){
    return (
        <h2>Hello, {props.name}!!</h2>
    );
}

// you export it so other likes like App.jsx can use it
export default Greeting;