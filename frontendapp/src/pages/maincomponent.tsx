
import React from "react";
import { useLocation } from "react-router-dom";
import { Backbutton } from "../components/backbutton";
import { getPost } from "../components/postfetch";

export const Maincomponent = () => {
    const loc = useLocation();
    const getpost = getPost()
    const { id, name } = loc.state || {};

    if (!id || !name) {
        return <div>No User Found</div>;
    }

    return (
        <div>
            <div className="maincomponent">
                <Backbutton />
                <></>
            </div>
        </div>
    );
};
   