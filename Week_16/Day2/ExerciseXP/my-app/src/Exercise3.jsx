import "./Exercise3.css";

const style_header = {
    color: 'white',
    backgroundColor: 'DodgerBlue',
    padding: '10px',
    fontFamily: 'Arial',
};

export default function Exercise(){
    return (
        <>
        <h1 style={style_header}>This is the header</h1>
        <p className="para">This is a paragraph</p>
        <a href="https://www.google.com">This is a link</a>
        <form>
            <p>This is a form: </p>
            <label>Enter your name: <input type="text" /></label>
        
            <button>Submit</button>
        </form>
        <p className="para">Here is an image:</p>
        <img src="https://opensource.fb.com/img/projects/react.jpg" />
        <ul>
            <p className="para">This is a list</p>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
        </ul>
        </>
    );
}

