import React from 'react';
import './Column.css';

const Column = props => {
    let width = props.span;
    width = 100/(12/width);
    return (
        <div
        style= {{
            maxWidth: width + '%',
            flexGrow: 0,
            flexShrink: 0,
            flexBasis: width + '%'
        }}
        >
            {props.children}
        </div>
    )
}

export default Column;