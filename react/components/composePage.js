import React from 'react';
import ComposeForm from "./composeForm";

export default class ComposePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.bindHandlers();

    }

    bindHandlers(){
        this.redirectToHome = this.redirectToHome.bind(this);
        this.saveRequested = this.saveRequested.bind(this);
        this.savePost = this.savePost.bind(this);
    }

    redirectToHome(){
        this.props.history.push("/");
    }

    savePost(newPost){
        let myPostsString = localStorage.getItem("myPosts");

        let myPosts = [];
        if (myPostsString){
            myPosts = JSON.parse(myPostsString);
        }

        myPosts.unshift(newPost);

        localStorage.setItem("myPosts", JSON.stringify(myPosts));
    }

    saveRequested(formData) {
        fetch("https://jsonplaceholder.typicode.com/posts", {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                userId: 1,
                title: formData.title,
                body: formData.body,
                id: 123
            })
        })
            .then((response) => response.json())
            .then((post) => {
                this.savePost(post);
                this.redirectToHome();
            })
            .catch((reason) => {
                alert(reason);
            });
    }


    render() {
        return (
            <div>
                <h2>Compose!</h2>
                <br/>
                <ComposeForm onSave={this.saveRequested} />
            </div>
        );
    }
}
