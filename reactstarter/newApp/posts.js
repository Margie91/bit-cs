import React from "react";
import Post from "./post";
import items from "./data";

const Posts = (props) => {
    const postList= items.items.map((element) => {
        return (
        <div>
            <h3 style={{"backgroundColor": "orange"}}>{element.title}</h3>
            <p>{element.body}</p>
        </div>
    );
    });
};


export default Posts;