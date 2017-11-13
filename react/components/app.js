import React from "react";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";

const App = (props) => {
    return (
        <div>
                <Header />
            <div className = "container">
                <Main />
            </div>
                <Footer />
        </div>    
    );
};

export default App;