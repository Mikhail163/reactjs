import './Content.scss';

import React, { Component, Fragment } from 'react';

import Counter from 'components/Counter';
import BoatSelection from 'components/BoatSelection';

export default class Content extends Component {
    handleCounterChange = (counter) => {
        console.log(`Новое значение ${counter}`);
    }
    render() {      
        return (
            <Fragment>
            <h1>Главная старница самого интерактивного сайта</h1>
            <p>Это учебное приложение, которое вскоре превратится в реально существующий проект: интеллектуальный поиск лодок и моторов</p>

            <Counter onChange={this.handleCounterChange}/>

           </Fragment>
        );
    }
}