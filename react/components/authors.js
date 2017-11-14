import React from "react";


const Author = (props) => {
    return (
        <div className="col-12 authors">
            <div className="">
                <h3>{props.name}</h3>
                <p>{props.website}</p>
                <hr/>
            </div>
        </div>
    );
};

class Authors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                this.setState({
                    data: result,
                });
            });
    }

     render(){
         return(
            this.state.data.map((author) => <Author name={author.name} website={author.website} key={author.id}/> )
         );
     }

}




export default Authors;