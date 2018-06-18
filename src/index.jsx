import './index.scss';

import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';

import Menu from 'components/Menu';
import Header from 'components/Header';

/*
const menuItems = [
    {
        link: 'http://www.yandex.ru',
        title: 'Yandex'
    },
    {
        link: 'http://www.google.ru',
        title: 'Google'
    }
]
*/

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Menu />
            </Fragment>
        );
    }
}

ReactDom.render(<App />, document.getElementById('app'));