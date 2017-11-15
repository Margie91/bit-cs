import React from 'react';
import ReactDOM from 'react-dom';
import CompSecondChild from './sample2';

let myObj = {
    name: 'Marija',
    lastName: 'Nikolic',
    age: 26,
    isDumb: "no"
};
let secondObj ={
    name: 'Nevena',
    age: 25,
    isOld: "yes"
};

const MyComp = (props) => {
    return (
        <div>
        <h1>Hello from <span style={{color:"pink"}}>{props.name2} </span> and <span style= {{color: "orange"}}>{props.name}</span>!</h1>
        <p>Hello there {props.name} {props.lastName}, age: {props.age}, are you dumb? {props.isDumb}</p>
        <img src="https://i.pinimg.com/736x/f5/f7/f2/f5f7f2b5504b10314f5b066084617a5f--golden-retriever-puppy-golden-puppy.jpg" style={{width: "500px"}}/>
        <CompChild message='hello' />
        <CompChild message='hello again' />
        <CompChild message='we meet again' />
        <CompSecondChild message='I am your second child'/>
        </div>
    );
};

const CompChild = (props) => {
    return (
        <h4>{props.message}</h4>
    );
};


ReactDOM.render(<MyComp name="Marija" name2="Nevena" lastName="Vasiljevic" age="35"/>, document.getElementById("app"));




