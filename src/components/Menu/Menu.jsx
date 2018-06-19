import './Menu.scss';

import React, { Component } from 'react';

export default class Menu extends Component {  
    render () {
        const { items } = this.props;
        return ( 
           <div className="container menu">
             {items.map((item, index) => <a key={index} href={item.link} className="menu_item">{item.title}</a>)}
           </div> 
        );
    }    
}