import './Content.scss';

import React, { Component } from 'react';

import Counter from 'components/Counter';

export default class Content extends Component {
    handleCounterChange = (counter) => {
        console.log(`Новое значение ${counter}`);
    }
    render() {      
        return (
            <div className="container content">
            <p>Здесь размещен очень интересный контент, примерное время прочтения 7 минут + пролистается 4 страницы.</p>
            
            <Counter onChange={this.handleCounterChange}/>

            </div>
        );
    }
}