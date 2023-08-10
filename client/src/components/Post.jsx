import './Post.css'

function Post(data) {
    return (
        <div className="post">
          <div className="title">{data.title}</div>
          <div className="content">{data.content}</div>
          <div className="footer">{data.username}</div>
        </div>
    );
}

export default Post;