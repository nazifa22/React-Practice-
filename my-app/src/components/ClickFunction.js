
import React, { Component } from "react";

class ClickFunction extends Component {
    clickHandler() {
        console.log('2nd Event is clicked!')
    }
    
    render() {
        return(
            <div>
                <button onClick = {this.clickHandler}>Click Event</button>
            </div>
        )
    }
}

export default ClickFunction;