import React, {Component} from 'react';
import style from './AppStyles.module.css';

class UserGretting extends Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: true
        }
    }
    
    render() {
        // Method 1
        
        // if(this.state.isLoggedIn) {
        //     return (
        //         <div>
        //             <h3><i>Hello Nazifa</i></h3>
        //         </div>
        //     )
        // }
        // else {
        //     return (
        //         <div>
        //             <h3><i>Hello User</i></h3>
        //         </div>
        //     )
        // }
        
        
        // Method 2
        
        // let message;
        
        // if(this.state.isLoggedIn) {
        //     message = <i>Hello Nazifa</i>
        // }
        // else {
        //     message = <i>Hello User</i>
        // }
        
        // return (
        //     <div>{message}</div>
        // )
        
        
        // Method 3
        
        // return (
        //     this.state.isLoggedIn ?
        //     (<i>Hello Nazifa</i>) :
        //     (<i>Hello User</i>)
        // )
        
        return this.state.isLoggedIn && <i className={style.greenYellow}>Hello Nazifa!!!!!!!</i> //Will return the true value only
    }
}

export default UserGretting;