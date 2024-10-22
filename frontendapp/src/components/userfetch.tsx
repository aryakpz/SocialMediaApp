
import axios from "axios";
import { useState, useEffect } from "react";
import { UserProps } from "../Types/types";

export const GetUsers = () => {
    const [users, setUsers] = useState<UserProps>([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => setUsers(response.data))
    }, []);

    return { users };
};
 