import data from "./data.json";

export default function(){
    return (
        <div>
            <h1 style={{ padding: "10px" }}>Social Media</h1>
            {data.SocialMedias.map((url, index) => (
                <li style={{ color: "blue", paddingBottom: "5px" }} key={index}>{url}</li>
            ))}
        </div>
    );
}