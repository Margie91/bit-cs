import React from "react";

const NameSurname = (props) => {
    return (
        <div className="row nameSurname">
            <div className="col-4">
                <img src="https://s3-media2.fl.yelpcdn.com/bphoto/oYvojniHSId2Y-cqHq5z6w/258s.jpg" />
            </div>
            <div className="col-8 singleAuthor">
                <h3>{props.name}</h3>
                <p>Username: {props.username}</p>
                <p>Email: {props.email}</p>
                <p>Phone: {props.phone}</p>
            </div>
        </div>
    )
}

const Iframe = (props) => {
    return (
    <div className="col-6 map">
        <iframe src={props.src} height={props.height} width={props.width}/> 
    </div>
    )
}

const Info = (props) => {
    return (
        <div className="row">
            <div className="col-6">
                <h4>Address</h4>
                <p>Street: {props.street}</p>
                <p>City: {props.city}</p>
                <p>Zipcode: {props.zipcode}</p>
            </div>
            <Iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d11322.733515744007!2d20.470448599999997!3d44.807640899999996!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ssr!2srs!4v1511136771775"
            height="300" width="100%" />
        </div>
    )
}

const Company = (props) => {
    return (
        <div className="row">
            <div className="col-12">
                <h4>Company</h4>
                <p>Company name: {props.name}</p>
                <p>Company slogan: {props.slogan}</p>
            </div>
        </div>
    )
}


class SingleAuthor extends React.Component {
    constructor(props) {
        super(props)


        this.state = { authorData: [] }
    }

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
            .then((result) => {
                return result.json();
            })
            .then((result) => {
                this.setState({
                    authorData: result
                });
            });

    }

    render() {
        let author = this.state.authorData;

        return (
            <div>
                <NameSurname name={author.name} username={author.username} email={author.email} phone={author.phone} />
                <hr className="singleAuthorHR"/>
                <Info />
                <hr className="singleAuthorHR"/>
                <Company />
            </div>
        )
    }
}

export default SingleAuthor;