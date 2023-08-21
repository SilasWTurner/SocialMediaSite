import { useParams } from "react-router-dom";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Post.css";

function Post() {
    let {id} = useParams();
    const [postObject, setPostObject] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:5001/posts/fromID/${id}`).then((res) => {
            setPostObject(res.data);
        });
    }, []);


    return (
        <>
            <NavBar active=""/>
            <div className="postPage">
                <div className="left">
                    <div className="title">{postObject.title}</div>
                    <div className="content">{postObject.content}</div>
                    <div className="footer">{postObject.username}</div>
                </div>
                <div className="right">

                </div>
            </div>
        </>
    )
}

export default Post