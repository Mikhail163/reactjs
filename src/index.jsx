import './index.scss';

import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import routes from './routes';
import store from './store';

import Menu from 'components/Menu';
import Header from 'components/Header';
import Footer from 'components/Footer';

const menuItems = [
    { link: '#catalog', title: 'Каталог' },
    { link: '#contacts', title: 'Контакты' },
    { link: '#pay', title: 'Оплата доставка' },
    { link: '#reviews', title: 'Отзывы' }
]

class App extends Component {
    render() {
        
        return (        
            <Provider store={store}>
                <Fragment>
                    <Header />
                    <BrowserRouter>
                    <Fragment>
                    <Menu items={routes}/>
                    <Switch>
                        {routes.map((route, idx) => <Route key="{idx}" {...route} />)}
                    </Switch>
                    </Fragment>
                    </BrowserRouter>
                    <Footer />
                </Fragment>
            </Provider>
        );
    }
}

ReactDom.render(<App />, document.getElementById('app'));
