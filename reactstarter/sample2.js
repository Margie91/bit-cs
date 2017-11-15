import React from 'react';

const CompSecondChild = (props) => {
    return (
        <div>
        <h3>This is my second child</h3>
        <p>{props.message}</p>
        </div>
    );
};

export default CompSecondChild;