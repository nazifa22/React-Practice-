import React from 'react';
import './Button.css';

const Button = (props) => {
    const value= props.name;
    let btnColor, btnType;
    if(props.varient === 'primary') {
        btnColor = 'btn-primary';
    }
    else if(props.varient === 'danger') {
        btnColor = 'btn-danger';
    }
    else if(props.varient === 'success') {
        btnColor = 'btn-success';
    }
    else {
        btnColor = 'btn-default';
    }
    
    if(props.type === 'outline') {
        btnColor = props.varient;
        btnType = `btn-${btnColor}-outlined`;
    }
    else {
        btnType = `btn-${props.varient}`;
    }
    return (
        <>
            <input type="submit" value={value} onClick={props.buttonHandler} className={`btn ${btnColor} ${btnType}`}/>
        </>
    )
}

export default Button;