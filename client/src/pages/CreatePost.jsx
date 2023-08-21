import NavBar from "./components/NavBar";
import {Formik, Form, Field, ErrorMessage, useField} from "formik";
import * as Yup from "yup";
import "./CreatePost.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MyTextArea = ({ ...props}) => {
    const [field, meta] = useField(props);
    return (
        <>
            <textarea className="text-area" {...field} {...props} />
            {meta.touched && meta.error ? (
                <span>{meta.error}</span>
            ) : null}
        </>
    );
  };

function CreatePost() {

    const username = "Jeremy";

    const initialValues = {
        title: "",
        content: "",
        username: username
    };

    let nav = useNavigate();

    const onSubmit = (data) => {
        axios.post("http://localhost:5001/posts", data).then(() => {
            nav("/");
        });
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().max(40, "Must be 40 characters or less").required("Required"),
        content: Yup.string().max(200, "Must be 200 characters or less").required("Required"),
    });

    return (
        <div className="createPost">
            <NavBar active="CreatePost"/>
            <div className="formContainer">
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    <Form>
                        <label>Title: </label>
                        <Field id="inputCreatePost" name="title" placeholder="(Ex. My Amazing Post...)"/>
                        <ErrorMessage name="title" component="span"/>
                        <label>Post: </label>
                        <MyTextArea
                            id="inputCreatePost"
                            name="content"
                            rows="6"
                            placeholder="(Ex. Hello world...)"
                        />
                        <Field hidden name="username" />
                        <button type="submit">Create Post</button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default CreatePost