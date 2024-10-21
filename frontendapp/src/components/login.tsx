import React, { useState, useEffect } from "react";
import axios from "axios";
import { UserProps } from "../Types/types";
import { Backbutton } from "./bakbutton";
import userlogo from '../asset/user-solid.svg'

export const Login = () => {
    const [users, setUsers] = useState<UserProps>([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                setUsers(response.data)
            })

            .catch(error => {
                console.error("Some thing went wrong !", error)
            })
    })

    return (
        <div>
            <Backbutton />
            <div className="users">
                {users.map(user => (
                    <div key={user.id} className="userlist">
                        <div className="singleuser">
                            <img src={userlogo} />
                            <span> {user.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
