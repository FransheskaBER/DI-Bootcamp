import axios from "axios";
import { useState } from "react";


export default function LeftColumn() {
    const [images, setImages] = useState([]);

    async function fetchImages(){
        const { data } = await axios.get("https://picsum.photos/v2/list?page=0&limit=2");
        setImages(data);
    }
    
    return (
        <div className="col left">
            <h2>Left Column</h2>
            <button type="button" onClick={fetchImages} className="btn btn-primary">Get Images</button>
            {images.map((image, index) => {
                const { author, download_url } = image;
                return (
                    <div key={index} className="images">
                        <img src={download_url} alt={author} />
                    </div>
                );
            })}
        </div>
    );
}