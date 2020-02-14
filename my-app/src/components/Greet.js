import React from 'react';

// const Greet = (props) => <p><i>Created a new file called {props.fileName}</i></p>;

// const Greet = (props) => {
//   return (
//         <p>
//             <i>Created a new file called {props.fileName}</i>
//         </p>
//     )
// }

// const Greet = ({fileName}) => {
//     return (
//         <p>
//             <i>Created a new file called {fileName}</i>
//         </p>
//     )
// }

const Greet = props => {
    const {fileName} = props
    
    return (
        <div>
            <i>Created a new file called {fileName}</i>
        </div>
    )
}

export default Greet;