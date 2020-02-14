import React, {Component} from 'react';

class Counter extends Component {
    constructor() {
        super()
        
        this.state = {
            count: 0
        }
    }
    
    increment() {
        this.setState({
                count: this.state.count + 5
            },
            () => {console.log('Count:', this.state.count)}         
        )
    }
    
    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick = {() => this.increment()}>Count</button>
            </div>
        )
    }
}

export default Counter;