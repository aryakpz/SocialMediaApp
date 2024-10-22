
import axios from "axios";
import { useState } from "react";
import { UserProps } from "../Types/types";

export const getPost = () => {
    const [user, setUser] = useState<UserProps>([])
    axios.get("https://gorest.co.in/public/v2/posts")
        .then(response => {
            setUser(response.data)
        })

    return { user }
}