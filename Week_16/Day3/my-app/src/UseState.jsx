import { useState, useEffect } from 'react';

function Greeting() {
    const [fullname, setFullname] = useState('');

    function handleChange(e){
        setFullname(e.target.value);
    }

    return (
        <div className='Text-center'>
            <label htmlFor="fullname">Full Name: </label>
            <input type="text" name="fullname" onChange={handleChange} />
            <div className='border border-primary py-3'>
                <h4>Greetings, {fullname}!</h4>
            </div>
        </div>
    );
}

function Clock(){
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(timerID);
    }, []);

    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {date.toLocaleTimeString()}</h2>
        </div>
    );
}

export default Clock;