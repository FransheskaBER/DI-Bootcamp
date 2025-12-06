// react components props without TS
// function Greenting({ name }) {
//     return (
//         <h1>Hello {name}<h1/>
//     );
// }
// <Greeting name={42}> will crash only at runtime typeError


// With TS:

// type GreetingProps = { name: string; };
// function Greeting({ name }: GreetingProps) {
//     return <h1>Hello {name}</h1>; 
// }