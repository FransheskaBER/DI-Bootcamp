import { useState } from 'react';

  // React gives you a specia function to create a state which is { useState } and you can use like this:
  // const [count, setCount] = useState(0);
  // The "count" means the current value starts at 0, the "setCount" is the function used to update that value,
  // and the "useState(0)" creates the state and set the initial value to 0.

function Counter(){
    const [count, setCount] = useState(10);

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count -1)}>Decrease</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

export default Counter;