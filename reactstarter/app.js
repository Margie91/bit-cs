import React from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";
import Header from "./header";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));