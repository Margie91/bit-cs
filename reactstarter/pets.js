import React from 'react';
import ReactDOM from 'react-dom';

let house = 45;

const FishBowl = (props) => {
    const fishArr = [];
    for (let i = 0; i < props.count; i++) {
        fishArr.push(<Fish key = {i} message = {i + 1} />);
    }
    return fishArr;
}

const PetsComp = (props) => {
    if (props.house > 50) {
        return (
        <Dog message = "WOOF!"/>
        );
    } else {
        return ( 
          <FishBowl count = "10"/>
        );
    }
};

const Dog = (props) => {
    return (
        <p>You can keep the dog, {props.message}</p>
    );
};

const Fish = (props) => {
    return (
        <p>You can keep the fish {props.message}</p>
    );
};

ReactDOM.render(<PetsComp house = "40"/>, document.getElementById("app"));