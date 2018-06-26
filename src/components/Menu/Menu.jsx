import './Menu.scss';

import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

export default class Menu extends Component {  
    render () {
        const { items } = this.props;
        return ( 
           <div className="container menu">
             <BrowserRouter>
             {items.map((item, index) => <Link key={index} to={item.path} className="menu_item">{item.title}</Link>)}
             </BrowserRouter>
           </div> 
        );
    }    
}