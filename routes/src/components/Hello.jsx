import React from 'react';

const Hello = (props) => {
    
    return (
        <div>
            <h1 style={{color:props.textColor, backgroundColor:props.backGroundColor}}>{props.word}</h1>
        </div>
    );
};

export default Hello;