import React, {Component} from 'react';

class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Hello Nazifa!'
        }
        this.changeMessage = this.changeMessage.bind(this)
    }
    
    changeMessage() {
        this.setState({
            message: 'Hello World!'
        })
    }
    
    render() {
        return (
            <div>
                <i>{this.state.message}</i>
                <br></br>
                {/* <button onClick = {() => this.changeMessage()}>Click Me</button> */}
                <button onClick = {this.changeMessage}>Click</button>
            </div>
        )
    }
}

export default Message;