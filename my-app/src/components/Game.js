import React, {Component} from 'react';
import {Row, Col} from 'antd';
import { Button } from 'antd';
import { Typography } from 'antd';
import './Game.css';

const styles = {
    healthbar: {
        backgroundColor: '#000',
        margin: '0',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    justifyCenter: {
        display: 'flex',
        justifyContent: 'center'
    }
}

class Game extends Component {
    constructor() {
        super();
        this.state = {
            playerHealth: 100,
            monsterHealth: 100,
            gameButtons: false
        }
    }
    startGame = () => {
        this.setState ({
            gameButtons: true
        })
    }
    attack = () => {
        this.setState({
            playerHealth: Math.floor(Math.random() * 100) - 5,
            monsterHealth: Math.floor(Math.random() * 100) - 2
        })
    }
    specialAttack = () => {
        this.setState({
            playerHealth: Math.floor(Math.random() * 100) - 2,
            monsterHealth: Math.floor(Math.random() * 100) - 10
        })
    }
    heal = () => {
        this.setState({
            playerHealth: this.state.playerHealth + 10
        })
    }
    render() {
        return (
            <>
                <Row justify='center'>
                    <Col span = {6}>
                        <h1 className = "text-center">YOU</h1>
                        <div className = "healthbar">
                            <div className = "healthbar text-center" 
                            style={{
                                width: this.state.playerHealth + '%',
                                backgroundColor: '#000',
                                justifyContent: 'center'
                            }}>    
                                {this.state.playerHealth}
                            </div>
                        </div>
                    </Col>
                    <Col span = {6}>
                        <h1 className = "text-center">MONSTER</h1>
                        <div className = "healthbar">
                            <div className = "healthbar text-center" 
                            style={{
                                width: this.state.monsterHealth + '%',
                                backgroundColor: '#000',
                                justifyContent: 'center'
                            }}> 
                                {this.state.monsterHealth}
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row style={{margin: '35px 0'}}>
                    <Col span = {24} style={styles.justifyCenter}>
                        <Button id="start-game" type='dashed' onClick={this.startGame}> 
                            START NEW GAME
                        </Button>
                    </Col>
                </Row>
                <Row id='gameButtons' className={this.state.gameButtons ? 'd-block' : 'd-none'}>
                    <Col span={24} style={styles.justifyCenter}>
                        <Button id="attack" type='dashed' onClick={this.attack}> 
                            ATTACK
                        </Button>
                        &nbsp;
                        &nbsp;
                        <Button id="special-attack" type='dashed' onClick={this.specialAttack}> 
                            SPECIAL ATTACK
                        </Button>
                        &nbsp;
                        &nbsp;
                        <Button id="heal" type='dashed' onClick={this.heal}> 
                            HEAL
                        </Button>
                        &nbsp;
                        &nbsp;
                        <Button id="give-up" type='dashed'> 
                            GIVE UP
                        </Button>
                    </Col>
                </Row>
            </>
        )
    }
}

export default Game;