import React from 'react';
import './Row.css';

const Row = (props) => {
    let align;
    if(props.align === 'center') {
        align = 'align-center'
    }
    else if(props.align === 'bottom') {
        align = 'align-bottom'
    }
    else if(props.align === 'top') {
        align = 'align-top'
    }
    else {
        align = ''
    }
    
    return (
        <div className = {`row ${align}`}>
            {props.children}
        </div>
    )
}

export default Row;