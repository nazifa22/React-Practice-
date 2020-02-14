import React, {Component} from 'react';

// class Welcome extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>This is a class component with Props! Hello {this.props.name}</h1>
//             </div>
//         )
//     }
// }

class Welcome extends Component {
    render() {
        const {name} = this.props
        return (
            <div>
                <h1>This is a class component with Props! Hello {name}</h1>
            </div>
        )
    }
}

export default Welcome;