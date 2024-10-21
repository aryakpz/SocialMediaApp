import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Backbutton } from "./bakbutton"; 

const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Enter a valid email").required("Email is required"),
});

type User ={
    name: string;
    email: string;
}

export const Signup = () => {
    const addUser = (user: User) => {
        console.log("New User Added: ", user);
    };

    const initialValues: User = { name: "", email: "" };

    const onSubmit = (values: User) => {
        addUser(values); 
    };

    return (
        <div className="mainsignup">
            <Backbutton /> 
            <div className="signup">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema} 
                    onSubmit={onSubmit}
                >
                    <Form>
                        <div>
                            <label htmlFor="name">Name</label>
                            <Field type="text" id="name" name="name" />
                            <ErrorMessage name="name" component="div" className="error" />
                        </div>

                        <div>
                            <label htmlFor="email">Email</label>
                            <Field type="email" id="email" name="email" />
                            <ErrorMessage name="email" component="div" className="error" />
                        </div>

                        <div>
                            <label>Gender</label>
                            <div>
                                <Field type="radio" name="gender" value="Female" /> Female
                                <Field type="radio" name="gender" value="Male" /> Male
                            </div>
                        </div>

                        <button type="submit">Submit</button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};
