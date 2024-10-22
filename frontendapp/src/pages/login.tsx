
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { GetUsers } from "../components/userfetch";
import { Backbutton } from "../components/backbutton";

const validationSchema = Yup.object({
    name: Yup.string().required(" * Name is required "),
    email: Yup.string().required(" * Email is required")
});

type User = {
    name: string;
    email: string;
}

export const Login = () => {
    const { users } = GetUsers();
    const nav = useNavigate();

    const initialValues: User = { name: "", email: "" };

    const handleLogin = (values: User) => {
        const user = users.find(user => user.name.toLowerCase() === values.name.toLowerCase());
        if (user && user.email === values.email) {
            nav('/mainpage', { state: { id: user.id, name: user.name } });
        } else {
            alert("Invalid username or email");
        }
    };

    return (
        <div>
            <Backbutton />
            <div className="mainsignup">
                <div className="signup">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleLogin}
                    >
                        <Form>
                            <h2>Login</h2>
                            <div className="input">
                                <Field
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Enter your username : "
                                    className="textbox"
                                />
                                <ErrorMessage name="name" component="div" className="error" />
                            </div>

                            <div className="input">
                                <Field
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email :"
                                    className="textbox"
                                />
                                <ErrorMessage name="email" component="div" className="error" />
                            </div>

                            <button type="submit">Login</button>
                        </Form>
                    </Formik>
                </div>
            </div>

            {/* <div className="users">
                {users.map(user => (
                    <div key={user.id} className="userlist">
                        <div className="singleuser">
                            <span>{user.name} - {user.email}</span>
                        </div>
                    </div>
                ))}
            </div> */}
        </div>
    );
}
