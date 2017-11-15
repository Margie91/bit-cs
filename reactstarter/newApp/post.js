import React from "react";

const Post = (props) => {
    return (
        <div>
            <h3>{props.post.title}</h3>
            <p>{props.post.body}</p>
            <hr/>
        </div>
    );
};

export default Post;