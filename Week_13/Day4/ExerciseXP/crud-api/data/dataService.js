import axios from "axios";

export async function fetchPost(){
    try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        // console.log(response.data);
        return response.data;
    } catch(error){
        console.error("Erro fetching posts:", error.message);
        throw error;
    }
};
