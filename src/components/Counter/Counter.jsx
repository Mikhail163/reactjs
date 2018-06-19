import './Counter.scss';

import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            counter: 1        
        }

        this.state = this.initialState;
    }

    handlePlusClick = (e) => {
        const {counter} = this.state;
        this.updateCounter(counter + 1);   
        e.preventDefault();
    }

    handleMinusClick = (e) => {
        const {counter} = this.state;
        this.updateCounter(counter - 1);
        e.preventDefault();
    }

    handleResetClick = (e) => {
        this.updateCounter(this.initialState.counter);
        e.preventDefault();
    }

    updateCounter(counter) {
        const {onChange} = this.props;

        this.setState({
            counter: counter
        });

        if (typeof onChange === "function") {
            onChange(counter);
        }  
    }

    render() {   
        const { counter } = this.state;   
        return (
            <div className="counter">
                <button onClick={this.handleMinusClick} className="counter_box counter_button">-</button>
                <div className="counter_box">{counter}</div>
                <button onClick={this.handlePlusClick} className="counter_box counter_button">+</button>
                <button onClick={this.handleResetClick} className="counter_box counter_button">Перезагрузить</button>
            </div>
        );
    }
}