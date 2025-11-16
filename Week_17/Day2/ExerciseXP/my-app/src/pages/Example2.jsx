import data from "./data.json";

export default function(){
    return (
        <div>
            <h1 style={{ padding: "20px" }}>Skills</h1>
            {data.Skills.map(item => (
                <ul style={{ fontWeight: "bolder" }} key={item.Area}>{item.Area}
                    {item.SkillSet.map(skill => (
                        <li style={{ fontWeight: "normal" }} key={skill.Name}>{skill.Name}</li>
                    ))}
                </ul>

            ))}
        </div>
    );
}