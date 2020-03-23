import React from 'react';
import './Styles.css';

const Hello = (props) => {
    let className = props.color ? 'orchid' : 'orangeRed';
    let color = 'orange';
    
    return (
        <div className={`${className} font-xs`}>
            <i className = "color font-xl">This is an Example of JSX</i>
            <li className={`listStyle`}>Hello {props.name}</li>
            {props.children}
        </div>
    );
}

export default Hello;