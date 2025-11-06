import { useState } from 'react';

function ToogleButton(){
    const [isOn, setIsOn] = useState(true);

    function handleToggle(){
        setIsOn(!isOn); // flips true to false
    }

    return (
        <div>
            <button
            onClick={handleToggle}
            style={{
                backgroundColor: isOn ? 'limegreen' : 'lightgray',
                color: 'black',
                padding: '10px 20px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
            }}
            >
                {isOn ? 'ON': 'OFF'}
            </button>
            <p>{isOn ? 'The light is shining🌞' : 'The light is off🌙'}</p>
        </div>
    );
}

export default ToogleButton;