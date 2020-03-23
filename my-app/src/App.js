import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Greet.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
import ClickFunction from './components/ClickFunction';
import ParentComponent from './components/ParentComponent';
import ChildComponent from './components/ChildComponent';
import UserGritting from './components/UserGretting';
import ListRendering from './components/ListRendering';
import PersonList from './components/PersonLists';
import './components/Greet.css';
import ModuleStyles from './components/AppStyles.module.css';
import CssModules from './components/CssModules';
import Session from './components/Session';
// import Form from './components/Form';
import Fragment from './components/Fragment';
import Temperature from './components/Temperature';
import Game from './components/Game';
import 'antd/dist/antd.css';
// import Row from './components/UI/Row';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <i className = {ModuleStyles.yellowGreen}>Hello World!</i>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section className="container">
        <Greet fileName = 'Greet.js'/>
        <Welcome />
        <Welcome name = 'Danial'/>
        <Welcome name = 'Sara' />
        <Hello color = {true}/>
        <Hello name = 'Danial' />
        <Hello name = 'Sara' color = {false}>
          <p>This is a child props!</p>
        </Hello>
        <Message />
        <Counter />
        {/* <FunctionClick /> */}
        <ClickFunction />
        <ParentComponent />
        <UserGritting />
        <ListRendering />
        <PersonList />
        <CssModules />
        {/* <Form /> */}
        <Fragment />
        <Temperature />
      </section>
    </div>
  );
}

export default App;
