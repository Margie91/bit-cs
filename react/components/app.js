import React from "react";
import Header from "./header";
import Main from "./main";
import Authors from "./authors";
import About from "./about";
import Footer from "./footer";
import {Switch, Route} from "react-router-dom";

const App = (props) => {
    return (
        <div>
                <Header />
            <div className = "container">
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route path="/authors" component={Authors}/>
                    <Route path="/about" component={About}/>
                </Switch>
            </div>
                <Footer />
        </div>    
    );
};

export default App;