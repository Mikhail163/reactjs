import './Menu.scss';

import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

export default class Menu extends Component {  
    render () {
        const { items } = this.props;
        return ( 
           <div className="container menu">       
               {items.map((item, idx) => 
                  <Link key={idx} to={item.path} className="menu_item">{item.title}</Link>
               )}
           </div> 
        );
    }    
}