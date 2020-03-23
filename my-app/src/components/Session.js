// import React from 'react';

// const Session = (props) => {
//     const name = props.name
//     const changeValue = () => {
//         document.getElementById('title').innerHTML = 'Clicked'
//     }
//     return(
//         <div>
//             <h1 id = "title">Click the button to see the change</h1>
//             <button onClick = {changeValue}>Click</button>
//         </div>
//     )
// }

// export default Session;

import React, {Component} from 'react';
import './Session.css';

const style = {
    fontSize: '20px',
    color: 'blue',
    button: {
        padding: '15px'
    }
}

class Session extends Component {
    constructor() {
        super();
        this.state = {
            name: 'React'
        }
        this.changeValue = this.changeValue.bind(this)
    }
    changeValue() {
        this.setState({
            name: 'Vue'
        })
    }
    render() {
        return (
            <div>
                <h1 style={style}>{this.state.name} Component</h1>
                <button className = 'button-outline' onClick = {this.changeValue}>CLick</button>
            </div>
            
        )
    }
}

export default Session;




// import React, {Component} from 'react';
// import './Session.css';

// const styles = {
//     h1: {
//         fontSize: '4rem',
//         fontStyle: 'italic'
//     }
// }
// class Session extends Component {
//     constructor() {
//         super()
//         this.state = {
//             buttonStyle: true
//         }
//         this.changeValue = this.changeValue.bind(this)
//     }
//     changeValue() {
//         this.setState ({
//             name: 'React'
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <h1 style = {styles.h1}>{this.state.name} session</h1>
//                 <button className = "button-outline fontXl" onClick = {this.changeValue}>Click</button>
//             </div>
//         )
//     }
// }
// export default Session;