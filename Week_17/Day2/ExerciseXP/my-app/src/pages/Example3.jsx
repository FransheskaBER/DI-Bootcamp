import data from "./data.json";
import { Link } from "react-router";

export default function Example3(){
    return (
        <div>
            <h1 style={{ padding: "10px" }}>Experiences</h1>
            {data.Experiences.map(item => (
                <div key={item.companyName} style={{ display: "grid", justifyItems: "center", gap: "10px" }}>
                    <hr />
                    <img src={item.logo}/>
                    <Link style={{ fontWeight: "bold" }} to={`https://www.google.com/`}>Demo1 Technologies</Link>
                    {item.roles.map(r => (
                    <div key={r.title}>
                        <h5>{r.title}</h5>
                        <p>`${r.startDate} ${r.location}`</p>
                        <p>{r.description}</p>
                    </div>
                    ))}
                </div>
            ))}
        </div>
    );
}