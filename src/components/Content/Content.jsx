import './Content.scss';

import React, { Component } from 'react';

import Counter from 'components/Counter';
import BoatSelection from 'components/BoatSelection';

export default class Content extends Component {
    handleCounterChange = (counter) => {
        console.log(`Новое значение ${counter}`);
    }
    render() {      
        return (
            <div className="container content">
            
            <BoatSelection />
            
            <Counter onChange={this.handleCounterChange}/>

            </div>
        );
    }
}