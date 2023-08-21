import {Link} from "react-router-dom";
import "./NavBar.css";

function NavBar(data) {
    let home = "";
    let createPost = "";
    if (data.active === "Home"){
        home = "active";
    } else if (data.active === "CreatePost"){
        createPost = "active";
    }
  return (
    <div className="nav">
        <Link to="/" className={home}>Home</Link>
        <Link to="/createpost" className={createPost}>Create Post</Link>
    </div>
  )
}

export default NavBar