import axios from "axios";
import { UserProps } from "../Types/types"; 

export const addUser = async (user: UserProps) => {
        const response = await axios.post("https://jsonplaceholder.typicode.com/users", user);
        return response.data; 
    
};
