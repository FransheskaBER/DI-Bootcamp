// GOOD KEY STABLE:
list.map(item => 
    <li key={item.id}>{item.name}</li>
)

// if your data doesnt have ID, generate IDs before rendering:
import { v4 as uuid } from "uuid";
const dataWithIds = data.map(item => ({
    ...item,
    _id: uuid()
}));

items.map(item => 
    <li key={item.id}>{item.name}</li>
)



// Exercise 1:
// BAD CODE
export default function BadList() {
  const fruits = ["Apple", "Banana", "Orange"];

  return (
    <ul>
      {fruits.map((f, index) => (
        <li key={Math.random()}>{f}</li>
      ))}
    </ul>
  );
}
//  GOOD CODE:
export default function GoodList() {
  const fruits = ["Apple", "Banana", "Orange"];
  return (
    <ul>
      {fruits.map(fruit => (
        <li key={fruit}>{fruit}</li>
      ))}
    </ul>
  );
}


// Exercise 2:
import { useState } from "react";
export default function Tasks(){
    const initial = [
        { id: 10, text: "Walk Pepper" },
        { id: 11, text: "Buy bananas" },
        { id: 12, text: "Finish React homework" }
    ];
    const [tasks, setTasks] = useState(initial);
    return (
        <div>
            <ul> {tasks.map((t) => (
                <li key={t.id}>
                    {t.text}
                    <button type="button" onClick={() =>
                        setTasks((prev) => prev.filter((item) => item.id !== t.id))}>
                        Delete Task
                    </button>
                </li>
            ))}
            </ul>
        </div>
    );
}

// Exercise 3:
import { v4 as uuid } from "uuid";
import { useState } from "react";

export default function Flowers(){
    const [flowersWithIds] = useState(() =>
        ["Rose", "Lily", "Tulip"].map((flower) => ({
            id: uuid(),
            name: flower,
        }))
    );
    return (
        <ul>
            {flowersWithIds.map((item) => (
            <li key={item.id}>{item.name}</li>
        ))}
        </ul>
    );

}