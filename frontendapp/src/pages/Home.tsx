
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
