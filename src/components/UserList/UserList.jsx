import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class UserList extends Component {
  render() {
    const { users, onLoadMore } = this.props;

    return (
      <div>
        <ul>
          {users.map(user => <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>)}
        </ul>
        <button onClick={onLoadMore}>Загрузить еще...</button>
      </div>
    )
  }
}