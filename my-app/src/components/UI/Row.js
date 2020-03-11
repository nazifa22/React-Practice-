import React from 'react';
import './Row.css';

function Row(props) {
    let align;
    if(props.align === 'center') {
        align = 'align-center'
    }
    else if(props.align === 'bottom') {
        align = 'align-bottom'
    }
    if(props.align === 'top') {
        align = 'align-top'
    }
    
    return (
        <div className = {`row ${align}`}>
            {props.children}
        </div>
    )
}

export default Row;