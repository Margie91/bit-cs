import React from "react";

class Timer extends React.Component {
    constructor(props){
        super(props);
        this.state = {myTime: "Pending..."};
    }

    componentDidMount() {
        setInterval(()=> this.setState({
            myTime: new Date().toTimeString()
        }), this.props.interval);
        
    }
    render(){
        return(
            <h1 style={this.props.style}>
                My time is {this.state.myTime}
            </h1>
        );
    }
}
export default Timer;