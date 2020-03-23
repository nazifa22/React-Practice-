import React from 'react';

const FunctionClick = () => {
    const clickEvent = () => {
        document.getElementById('wrapper').innerHTML = 'The event is Clicked!'
        console.log('1st Event is Clicked!')
    }
    
    const divStyle = {
        textAlign: 'center',
        padding: '20px',
    }
    
    return (
        <div style = {divStyle}>
            <button style={{ padding: '15px', border: 'none' }} onClick = {clickEvent}>
                Click Event
            </button>
        </div>
    )
}

export default FunctionClick;