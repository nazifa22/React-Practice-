import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FunctionClick from './components/FunctionClick'
import Form from './components/Form';
import * as serviceWorker from './serviceWorker';
import Game from './components/Game';

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);

ReactDOM.render(<FunctionClick />, document.getElementById('wrapper'));

ReactDOM.render(
    <Form/>,
    document.getElementById('form')
);

ReactDOM.render (
    <Game />,
    document.getElementById('game')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();