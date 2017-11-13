import React from "react";
import ReactDOM from "react-dom";
import Data from "./data";

const Post = (props) => {
    return (
        <div className="col-12 col-md-6 posts">
            <h3>{props.title}</h3>
            <p>{props.body}</p>
            <hr/>
        </div>
    )
}

const Posts = (props) => {
    return (
        Data.items.map((post) => <Post title={post.title} body={post.body} key={post.id} /> )
    )
}


const Main = (props) => {
    return (
        <div className="container">
            <div className="row">
                <Posts />
            </div>
        </div>
    );
};

export default Main;