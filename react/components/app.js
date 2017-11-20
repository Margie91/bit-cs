import React from "react";
import Header from "./header";
import Posts from "./main";
import Authors from "./authors";
import About from "./about";
import Footer from "./footer";
import SinglePost from "./post";
import SingleAuthor from "./authorPage";
import {Switch, Route} from "react-router-dom";
import ComposePage from "./composePage";

const App = (props) => {
    return (
        <div>
            <Header />
            <div className = "container">
                <Switch>
                    <Route exact path="/" component={Posts}/>
                    <Route path="/authors" component={Authors}/>
                    <Route path="/about" component={About}/>
                    <Route path="/post/:id" component={SinglePost}/>
                    <Route path="/authorPage/:id" component={SingleAuthor}/>
                    <Route path="/compose" component={ComposePage}/>
                </Switch>
            </div>
            <Footer />
        </div>    
    );
};

export default App;