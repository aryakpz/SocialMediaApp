
import React from "react";
import userlogo from '../asset/user-solid.svg'
import { useNavigate } from "react-router-dom";

type userinfoprops = {
    id: number;
    name: string
}

export const UserDetails: React.FC<userinfoprops> = ({ id, name }) => {
    const nav = useNavigate()
    const handleclick = () => {
        nav('/userinfopage', { state: { id: id, name: name } })
    }

    return (
        <div>
            <div className="userinfo" onClick={() => { handleclick() }}>
                <img src={userlogo} />
                <p>{name}</p>
            </div>
        </div>    
    )
}                              