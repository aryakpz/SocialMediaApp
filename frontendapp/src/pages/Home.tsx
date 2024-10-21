// import React, { ChangeEvent, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { UserList } from "../components/userdisply";
// import { Fetch } from "../components/fetch";

// export const Home = () => {
//     const nav = useNavigate()
//     const [name, setName] = useState<string >("")

//     return (  
//         <div className="main">
//         <h2>    Get Connect with you App</h2>
//             <button onClick={()=><Fetch/>}>LOGIN</button>
//             <button>SIGNUP</button>
//             {/* <input
//                 type="text"
//                 placeholder="Search..."
//                 onChange={(e)=>setName(e.target.value)}>
//             </input>
//             <UserList names={name} /> */}

//         </div>
//     )
// }  



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Login } from "../components/login";
import './home.css'

export const Home = () => {
    const nav = useNavigate();
    const onLogin = () => {
        nav('/login')
    }
    const onSignup = () => {
        nav('/signup')
    }
    return (
        <div className="main">
            <div className="submain">
                <h2>Get Connect with your App</h2>
                <div className="buttonsec">
                    <button onClick={() => onLogin()}>LOGIN</button>
                    <button onClick={() => onSignup()}>SIGNUP</button>

                </div>
            </div>
        </div>
    );
}
