import type { ReactNode } from "react";

type Name = {
    first: string;
    last: string;
};

type Address = {
    city: string;
    country: string;
};

type UserProps = Name & Address & {
    age: number;
    status: "active" | "inactive";
    children?: ReactNode; // anything react can render like string, numbers, JSX, fragments, etc.
};

function UserCard({ first, last, country, city, age, status, children }: UserProps) {
    return ( 
    <>
    <div>
        <h2>Full Name: {first} {last}</h2>
        <h3>Country: {country} - City: {city}</h3>
        <h3>Age: {age}</h3>
        <h3>Status: {status}</h3>
    </div>
    <div className="extra">{children}</div>
    </>
    );
}

export default UserCard;