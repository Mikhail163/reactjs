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
        const { load, users } = this.props;
    
        if(!users.length) {
            load();
        }
    }

    handleLoadMore = () => {
        const { load } = this.props;

        load();
    }

    render() {
        const {  users, loading } = this.props;
        return (
            <Fragment>
            {loading  && !users.lenght ? <div>Loading...</div> : <UserList onLoadMore={this.handleLoadMore} users={users} />}
            </Fragment>
        );      
    }
}

function mapStateToProps(state, props) {
    return {
        ...props,
        page: state.users.page,
        loading: state.users.loading,
        users: state.users.entries,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        load: loadUsers.bind(null, dispatch),
    }
}

function mergeMap(stateProps, dispatchProps, ownProps) {
    return {
        ...stateProps,
        ...ownProps,
        load: () => dispatchProps.load(stateProps.page),
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeMap)(UserListContainer);