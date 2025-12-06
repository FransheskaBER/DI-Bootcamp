// COMBINED TYPES
type A = { a: number };
type B = { b: string };

type Combined = A & B;

export function Widget(props: Combined) {
    return <div>{props.a} - {props.b}</div>;
}

// UNION TYPE -> good for props that only allow specific values
type Size = "Small" | "Medium" | "Large"; // means only these strings are  valid, if you pass "Xlarge" as size it will be rejected
type ButtonProps = {
    label: string;
    size: Size;
};
export function Button2({ label, size }: ButtonProps) {
    return <button className={size}>{label}</button>;
}


