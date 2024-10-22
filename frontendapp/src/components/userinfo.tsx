
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import userlogo from '../asset/user-solid.svg';
import paperlogo from '../asset/pen-to-square-solid.svg';
import listlogo from '../asset/user-group-solid.svg';
import { GetUsers } from "../components/userfetch";
import likelogo from '../asset/heart-regular.svg'
import commentlogo from '../asset/comment-regular.svg'
import sentlogo from '../asset/paper-plane-regular.svg'
import { GetPost } from "./postfetch";
import { Backbutton } from "./backbutton";

export const UserInfoPage = () => {
    const loc = useLocation();
    const { id, name } = loc.state || {};
    const [showUserList, setShowUserList] = useState(false);
    const [showPost, setShowPost] = useState(false)
    const { users } = GetUsers();
    const { posts } = GetPost();

    const handleClickUsers = () => {
        setShowUserList(!showUserList);
    };

    const handleClickPost = () => {
        setShowPost(!showPost)
        console.log({ showPost })
    }

    const filteredUsers = users.filter(user => user.id !== id);
    const filterdePost = posts.filter(user => user.id === id)

    return (
        <>
            <div className="topnav">
                <Backbutton/>
                <div className="profile">
                    <img src={userlogo} alt="User" />
                   <div>
                   <p>{name}</p>
                   <span className="edituser">Edit User</span>
                   </div>
                    
                </div>
                <div className="postandusers">
                    <div>
                        <img src={paperlogo} alt="Post" />
                        <p onClick={handleClickPost}>Post</p>
                    </div>
                    <div>
                        <img src={listlogo} alt="Users" />
                        <p onClick={handleClickUsers}>Users</p>      
                    </div>
                </div>
            </div>
         
            <div className="bodysec">
                <div className="users">
                    {showUserList && (
                        <div className="userlist">
                            {filteredUsers.length > 0 ? (
                                filteredUsers.map((user) => (
                                    <div key={user.id} className="singleuser">
                                        <p>
                                            <img src={userlogo} />
                                            <span> {user.name}</span>
                                        </p>
                                    </div>
                                ))
                            ) : (<p> </p>)}
                        </div>
                    )}
                </div>  

                <div className="userpost">
                    {showPost && (
                        <div className="postbody">
                            {filterdePost.length > 0 ? (
                                filterdePost.map((post) => (
                                    <>
                                        <p className="postuser"><img src={userlogo} /></p>
                                        <h3>{post.title}</h3>
                                        <p className="postdata">{post.body}</p>
                                        <div className="logosec">
                                            <div><img src={likelogo} /></div>
                                            <div><img src={commentlogo} /></div>
                                            <div><img src={sentlogo} /></div>
                                        </div>
                                    </>
                                ))          
                            ) : (
                                <div className="notfound">
                                    <p> No Post Yet. </p>
                                </div>
                            )}
                        </div>
                    )} 
                </div>
            </div>
        </>
    );
};
       