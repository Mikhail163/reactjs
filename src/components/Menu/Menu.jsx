import './Menu.scss';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends Component {  
    render () {
        const { items } = this.props;
        return ( 
           <div className="container menu">
             
             {items.map((item, index) => <Link key={index} to={item.path} className="menu_item">{item.title}</Link>)}
             
           </div> 
        );
    }    
}