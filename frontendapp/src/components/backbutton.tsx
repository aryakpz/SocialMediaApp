
import React from "react";
import { useNavigate } from "react-router-dom";

export const Backbutton = () => {
    const nav = useNavigate()
    return (
        <div className="mainback">
        <button className="backbutton" onClick={() => nav(-1)}>Back</button>
        </div>
    )
}