import { useState } from 'react';
import './Form.css';

export default function Form(){
    const [formObj, setFormData] = useState({});

    function handleSubmitForm(e){
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const formObj = Object.fromEntries(formData.entries());
        setFormData(formObj);
        console.log(formObj);
    }

    let success = null;
    if (Object.keys(formObj).length !== 0){
        success = <p>Your data was successfully sent!</p>
    }

    return (
        <div>
            <form className="bookForm" onSubmit={handleSubmitForm}>
                <h1>New Book</h1>
                {success}
                <label htmlFor="title">Title</label>
                <input type="text" name='title'/>
                <label htmlFor="author">Author</label>
                <input type="text" name='author'/>
                <label htmlFor="genre">Genre</label>
                <input type="text" name='genre'/>
                <label htmlFor="year">Year Published</label>
                <input type="text" name='yearpublished'/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}