import React from "react";
import Timer from "./timer";

class Header extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Timer style={{"color":"firebrick"}} interval="1000"/>    
                <Timer  interval="3000"/>
            </div>
        );
    }
}

export default Header;