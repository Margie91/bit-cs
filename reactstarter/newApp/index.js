import React from "react";
import ReactDOM from "react-dom";
import items from "./data";

import Header from "./header";
import Posts from "./posts";
import Footer from "./footer";

console.log(items.items[0].title);

const Main = (props) => {
    return (
        <div>
            <Header />
            <Posts />
            <Footer />
        </div>
    );
};

ReactDOM.render(<Main />, document.getElementById("app"));