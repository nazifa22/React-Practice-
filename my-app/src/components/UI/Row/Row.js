import React from 'react';
import './Row.css';

const Row = (props) => {
    let align;
    if(props.align === 'top') {
        align = 'align-top';
    }
    else if(props.align === 'center') {
        align = 'align-center';
    } 
    else if(props.align === 'bottom') {
        align = 'align-bottom';
    }
    
    let justify;
    if(props.justify === 'left') {
        align = 'justify-left';
    }
    else if(props.justify === 'center') {
        align = 'justify-center';
    } 
    else if(props.justify === 'right') {
        align = 'justify-right';
    }
    
    return (
        <div className = {`row ${align} ${justify}`}>
            {props.children}
        </div>
    )
}

export default Row;