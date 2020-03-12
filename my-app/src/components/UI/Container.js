import React from 'react';
import './Container.css';

let Container = (props) => {
    let container = props.container ? 'container-fluid' : 'container'
    return (
        <div className={`${container}`}>
            {props.children}
        </div>
    )
}

export default Container