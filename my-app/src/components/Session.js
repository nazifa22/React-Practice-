import React, {Component} from 'react';

class Session extends Component {
    constructor() {
        super();
        this.state = {
            session: 'React'
        }
        this.changeValue = this.changeValue.bind(this);
    }
    
    changeValue() {
        this.setState ({
            session: 'Vue'
        })
    }
    
    render() {
        return (
            <div>
                {this.state.session} Session
                <button onClick={this.changeValue}>Change State Value</button>
            </div>
        )
    }
}

export default Session;

// import React from 'react';

// const Session = (props) => {
//     return <div>{props.session} Session</div>
// }

// export default Session;