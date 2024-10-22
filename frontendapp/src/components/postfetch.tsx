
import axios from "axios";
import { useState, useEffect } from "react";
import { PostProps } from "../Types/types";

export const GetPost = () => {
    const [posts, setPost] = useState<PostProps>([]);
    useEffect(() => {
        axios.get("https://gorest.co.in/public/v2/posts")
            .then(response => setPost(response.data))
    }, []);
    return { posts }
}
    