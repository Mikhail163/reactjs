import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Menu from './Menu.jsx';

class App extends Component {
    render() {
        return (
            <Menu />
        );
        }
}

ReactDom.render(<App />, document.getElementById('app'));