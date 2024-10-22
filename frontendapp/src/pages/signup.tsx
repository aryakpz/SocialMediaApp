import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Backbutton } from "../components/backbutton";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
    name: Yup.string().required(" * Name is required"),
    email: Yup.string().email(" * Enter a valid email").required(" * Email is required"),
});

type User = {
    name: string;  
    email: string;
}

export const Signup = () => {
    const nav = useNavigate()

    const addUser = (user: User) => {
        console.log("New User Added: ", user);
    };

    const initialValues: User = { name: "", email: "" };

    const onSubmit = (values: User) => {
        addUser(values);
    };   

    const handleclick = () => {        
        nav('/login')
    }

    return ( 
        <div>     
            <Backbutton />
            <div className="mainsignup">
                <div className="signup">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        <Form>
                            <div>
                                <h3>Sign UP</h3>
                            </div>
                            <div className="input">
                                <Field type="text" id="name" name="name" placeholder="Enter  your name : " className="textbox" />
                                <ErrorMessage name="name" component="div" className="error" />
                            </div>

                            <div className="input">
                                <Field type="email" id="email" name="email" placeholder="Enter your Email : " className="textbox" />
                                <ErrorMessage name="email" component="div" className="error" />
                            </div>

                            <div className="input">
                                <div className="gender">
                                    <Field type="radio" name="gender" value="Female" /> Female
                                    <Field type="radio" name="gender" value="Male" /> Male
                                </div>
                            </div>

                            <div className="signbuttons">
                                <button type="submit">Submit</button>
                                <button type="submit" onClick={() => handleclick()}>Login</button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>           
    );         
};




// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { Backbutton } from "../components/backbutton";
// import { useNavigate } from "react-router-dom";
// import { addUser } from "../components/postuser";
// import { UserProps } from "../Types/types";

// type User = {
//     name: string;
//     email: string;
//     gender: string
// }

// const validationSchema = Yup.object({
//     name: Yup.string().required(" * Name is required"),
//     email: Yup.string().email(" * Enter a valid email").required(" * Email is required"),
// });

// export const Signup = () => {
//     const nav = useNavigate();
//     const initialValues: User = { name: "", email: "", gender: "" };
//     const onSubmit = async (values: UserProps) => {

//         const newUser = await addUser(values);
//         nav("/users", { state: { newUser } });
//     };

//     const handleLoginClick = () => {
//         nav('/login');
//     };

//     return (
//         <div>
//             <Backbutton />
//             <div className="mainsignup">
//                 <div className="signup">
//                     <Formik
//                         initialValues={initialValues}
//                         validationSchema={validationSchema}
//                         onSubmit={onSubmit}
//                     >
//                         <Form>
//                             <div>
//                                 <h3>Sign UP</h3>
//                             </div>
//                             <div className="input">
//                                 <Field type="text" id="name" name="name" placeholder="Enter your name" className="textbox" />
//                                 <ErrorMessage name="name" component="div" className="error" />
//                             </div>

//                             <div className="input">
//                                 <Field type="email" id="email" name="email" placeholder="Enter your email" className="textbox" />
//                                 <ErrorMessage name="email" component="div" className="error" />
//                             </div>

//                             <div className="input">
//                                 <div className="gender">
//                                     <Field type="radio" name="gender" value="Female" /> Female
//                                     <Field type="radio" name="gender" value="Male" /> Male
//                                 </div>
//                             </div>

//                             <div className="signbuttons">
//                                 <button type="submit">Submit</button>
//                                 <button type="button" onClick={handleLoginClick}>Login</button>
//                             </div>
//                         </Form>
//                     </Formik>
//                 </div>
//             </div>
//         </div>
//     );
// };




