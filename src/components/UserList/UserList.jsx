import React, { Component } from 'react';

export default class UserList extends Component{
    render() {
        const { users, onLoadMore } = this.props;

        return (
            <div>
            <ul>
                {users.map(user => <li key={user.id}>{user.title}</li>)}
            </ul>
            <button onClick={onLoadMore}>Загрузить еще...</button>
            </div>
        )
    }
}