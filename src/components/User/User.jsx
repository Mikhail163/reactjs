import React, { PureComponent } from 'react';

export default class User extends PureComponent {
  render() {
    const { user } = this.props;
    return (
      <div>
        {user.name} ({user.username})
        <a href={`mailto:${user.email}`}>Email me</a>
      </div>
    )
  }
}