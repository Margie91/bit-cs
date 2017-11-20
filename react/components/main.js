import React from "react";
import ReactDOM from "react-dom";
import Data from "./data";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import Search from "./search";



const Post = (props) => {
    return (
        <div className="col-12 col-md-6 posts">
            <div className="box-border">
                <h3>{props.title}</h3>
                <p>{props.body}</p>
                <p className="btn btn-primary"><Link to={`/post/${props.id}`}>Read more</Link></p>
                <hr/>
            </div>
        </div>
    );
};



class Posts extends React.Component{
    constructor(props){
        super(props);
        this.state = {data: [], allData: []};

        this.filterPosts = this.filterPosts.bind(this);

    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                this.setState({
                    data: result,
                    allData: result

                });
            });
    }

    filterPosts(searchTerm) {
        let currentData = this.state.allData;
        console.log(searchTerm);

        if(searchTerm === "") {
            this.setState({
                data: currentData
            });

            return;
        }

        let filteredData = currentData.filter((item) => {
            return item.title.includes(searchTerm);
        });

        this.setState({
            data: filteredData
        });
    }
   
    render(){
        return (
            <div>
            <Search requestedSearch={this.filterPosts} instant={true} />
            <div className="row">
            {this.state.data.map((post) => <Post title={post.title} body={post.body} id={post.id} key={post.id} /> )}
            </div>
            </div>
        );
    }

}

/*const Main = (props) => {
    return (
        <div>
            <Search requestedSearch={this.filterPosts} />
            <div className="row">
                <Posts />
            </div>
        </div>
    );
};*/



export default Posts;