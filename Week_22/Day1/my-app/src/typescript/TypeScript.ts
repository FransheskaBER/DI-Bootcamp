// STEP 1 - “A Greeting component must receive an object with a name property that is a string":
// interface: GreetingProps {
//     name: string;
// }

// STEP 2 - “You’re expecting an object shaped like GreetingProps.”:
// function Greeting({ name }: GreetingProps) {
//     returns <h1>Hello, ${name}!</h1>
// }


// With the React.FC approach is:
// const Greeting: React.FC<GreetingProps> = ({ name }) => {
//     return <h1>Hello, ${name}!</h1>
// }
// Why some people avoid this?
// It automatically adds children as a prop even if you don’t want it.
// It’s not necessary — typing the argument is enough.

type UserProps = {
    username: string;
};

function User({ username }: UserProps) {
    // return <p>User: {username}</p>
}
