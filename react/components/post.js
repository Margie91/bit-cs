import React from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router-dom";


const OnePost = (props) => {
    return (
        <div className="col-12 onePost">
            <h2>{props.title}</h2>
            <p>{props.body}</p>
            <hr className="col-12 onePostHR" />
        </div>    
    );
}

const PostsByAuthor = (props) => {
    return (
        <Link to={`/post/${props.id}`}><p className = "postsByAuthor">{props.title}</p></Link>
    );
}

class ListOfPosts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {data: null}
    }

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.props.userId}`)
            .then((result) => result.json())
            .then((result) => this.setState({ data: result }))
            .catch(error => {
                console.log(error);
        });
    }

    render() {
        if (!this.state.data) {
            return <h1>loading</h1>;
        }
        return (
            <div>
            <p>{this.state.data.length} more posts by this author</p>
            {this.state.data.map((element) => <PostsByAuthor title={element.title} id={element.id} key={element.id} />)}
            </div>
        );
    }

}

const AuthorName = (props) => {
    return (
        <h4 itemID="authorName">{props.name}</h4>
    );
}

class AuthorData extends React.Component {
    constructor(props) {
        super(props);

        this.state = {data: null}
    }

    componentDidMount () {
        fetch(`https://jsonplaceholder.typicode.com/users/${this.props.userId}`)
        .then((result) => result.json())
        .then((result) => this.setState({ data: result }))
        .catch(error => {
            console.log(error);
        });
        
    }
    render() {
        if (!this.state.data) {
            return <h1>loading</h1>;
        }
        return (
            <div className="col-12 authorName">
            <AuthorName name={this.state.data.name} key={this.state.data.id} />
            </div>
        )
    }

}


class SinglePost extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.state = {data: null};
    }

    componentDidMount () {
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
        .then((result) => result.json())
        .then((result) => this.setState({ data: result }))
        .catch(error => {
            console.log(error);
        });
        
    }


    render () {
        if (!this.state.data) {
            return <h1>loading</h1>;
        }
         return (
            <div className="col-12">
                <AuthorData userId={this.state.data.userId} />
                <OnePost title={this.state.data.title} body={this.state.data.body}/>
                <ListOfPosts userId={this.state.data.userId} />
            </div>

        );
    }
}



export default SinglePost;