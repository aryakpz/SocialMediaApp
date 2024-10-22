
import axios from "axios";
import { useState } from "react";
import { UserProps } from "../Types/types";

export const useFetchUsers = () => {
    const [users, setUsers] = useState<UserProps>([]);
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            setUsers(response.data);
        })

    return { users };
};
 