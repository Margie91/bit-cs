import React from "react";
import ReactDOM from "react-dom";


const OnePost = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <AuthorName />
            <p>{props.body}</p>
        </div>    
    );
}

const PostsByAuthor = (props) => {
    return (
            <p>{props.title}</p>
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
            {this.state.data.map((element) => <PostsByAuthor title={element.title} key={element.id} />)}
            </div>
        );
    }

}

const AuthorName = (props) => {
    return (
        <h4>{props.name}</h4>
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
            <AuthorName name={this.state.data.name} key={this.state.data.id} />
        )
    }

}


class SinglePost extends React.Component {
    constructor(props) {
        super(props);

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
            <div>
                <OnePost title={this.state.data.title} body={this.state.data.body}/>
                <AuthorData userId={this.state.data.userId} />
                <hr />
                <ListOfPosts userId={this.state.data.userId} />
            </div>

        );
    }
}



export default SinglePost;