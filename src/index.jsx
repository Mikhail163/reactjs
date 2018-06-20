import './index.scss';

import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';

import Menu from 'components/Menu';
import Header from 'components/Header';
import Content from 'components/Content';
import Footer from 'components/Footer';
import UserListContainer from 'containers/UserListContainer';


const menuItems = [
    { link: '#catalog', title: 'Каталог' },
    { link: '#contacts', title: 'Контакты' },
    { link: '#pay', title: 'Оплата доставка' },
    { link: '#reviews', title: 'Отзывы' }
]


class App extends Component {
    render() {
        /*
        return (
            <Fragment>
                <Header />
                <Menu items={menuItems}/>
                <UserListContainer />
                <Content />
                <Footer />
            </Fragment>
        );
        */
        return (
            <Fragment>
                <UserListContainer />
            </Fragment>
        );
    }
}

ReactDom.render(<App />, document.getElementById('app'));