
import React from "react";
import { useLocation } from "react-router-dom";
import { Backbutton } from "../components/backbutton";
import { GetPost } from "../components/postfetch";
import userlogo from '../asset/user-solid.svg'
import likelogo from '../asset/heart-regular.svg'
import commentlogo from '../asset/comment-regular.svg'
import sentlogo from '../asset/paper-plane-regular.svg'
import { GetUsers } from "../components/userfetch";
import { UserDetails } from "../components/userbutton";

export const Maincomponent = () => {
    const loc = useLocation();
    const { id, name } = loc.state || {};
    const { posts } = GetPost();
    const { users } = GetUsers();

    if (!id || !name) {
        return <div>No User Found</div>;
    }

    return (
        <div>
            <div className="maincomponent">
                <div className="topsection">
                    <Backbutton />
                    <UserDetails id={id} name={name} />
                </div>
                <div className="userpost">
                    {posts.map((post) => {
                        const postUser = users.find((user) => user.id === post.user_id);
                        const username = postUser ? postUser.name : " ";
                        return (
                            <div key={post.id} className="postbody">
                                <p className="postuser"><img src={userlogo} /> {username}</p>
                                <h3>{post.title}</h3>
                                <p className="postdata">{post.body}</p>
                                <div className="logosec">
                                    <div><img src={likelogo} /></div>
                                    <div><img src={commentlogo} /></div>
                                    <div><img src={sentlogo} /></div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};