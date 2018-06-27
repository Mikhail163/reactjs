import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';

import { loadUsers } from 'actions/users';
import UserList from 'components/UserList';

class UserListContainer extends PureComponent {

    /**
     * Компонент был смонтирован (один раз уже отрисовался)
     * в этом методе нужно отправлять запросы на сервер
     */
    componentDidMount() {
        const { load } = this.props;

        load();
    }

    render() {
        const {  users, loading } = this.props;

        console.log(users);

        return (
            <Fragment>
            {loading ? <div>Loading...</div> : <UserList onLoadMore={this.handleLoadMore} users={users} />}
            </Fragment>
        );      
    }
}

function mapStateToProps(state, props) {
    return {
        ...props,
        loading: state.users.loading,
        users: state.users.entries,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        load: () => dispatch(loadUsers()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);