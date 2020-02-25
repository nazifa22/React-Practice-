import React, {Component} from 'react';
import './Form.css';
import reactCSS from 'reactcss';

const inputFields = {
    border: 'none',
    backgroundColor: 'whitesmoke',
    padding: '10px'
}

const styles = {
    button: {
        border: '1px solid #f00',
        backgroundColor: 'transparent',
        padding: '10px 30px',
        fontSize: '12px',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        color: '#f00',
        borderRadius: '4px',
        
        ':hover': {
            backgroundColor: 'rgb(0, 159, 255)',
            color: '#000'
        }
    },
    
    input: {
        border: 'none',
        backgroundColor: 'whitesmoke',
        padding: '10px'
    }
}

class Form extends Component {
    constructor() {
        super();
        this.state = {
            userName: 'Username',
            password: ''
        }
    }
    
    getUsername = (event) => {
        this.setState ({
            userName: event.target.value
        })
    }
    
    getPassword = (event) => {
        this.setState ({
            password: event.target.value
        })
    }
    
    submitEvent = (event) => {
        alert(`${this.state.userName} ${this.state.password}`);
        event.preventDefault();
    }
    
    render(){
        return (
            <form onSubmit = {this.submitEvent}>
                <fieldset>
                    <legend>Login:</legend>
                    <label>Username:</label>
                    <input onChange = {this.getUsername} style = {styles.input} type="text" placeholder = {this.state.userName} />
                    <br/> 
                    <label>Password:</label>
                    <input onChange = {this.getPassword} style = {styles.input} type="password" placeholder = {this.state.password}/>
                    <br/> 
                    <input type="submit" value="Submit" style = {styles.button} />
                </fieldset>
            </form>
        )
    }
}

export default Form;