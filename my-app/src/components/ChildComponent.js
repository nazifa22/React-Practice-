import React from 'react'

const ChildComponent = props => {
    return (
        // <button onClick = {props.greetHandler}>Child Component</button>
        <button onClick = {() => props.greetHandler('Child')}>Child Component</button>
    )
}

export default ChildComponent