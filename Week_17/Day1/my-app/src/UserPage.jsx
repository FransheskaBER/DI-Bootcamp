import { useParams } from "react-router-dom";

export default function UserPage(){
    const {name} = useParams();
    return <h1>Hello, {name}</h1>;
}