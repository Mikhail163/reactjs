import React, { Fragment, PureComponent } from 'react';

import UserList from 'components/UserList'

export default class UserListContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            page: 1,
            users: []
        };
    }

    load() {
        const { page, users } = this.state;
        if(page === 1) {
            this.setState({ loading: true });
        }
        fetch(`https://jsonplaceholder.typicode.com/posts?limit=10&_page=${page}`)
        .then((response) => response.json())
        .then((results) => {
            this.setState({
            loading: false,
            page: page + 1,
            users: users.concat(results)
            })
        })
        .catch(() => {
            this.setState({ loading: false });
        });
    }

    /**
     * Компонент был смонтирован (один раз уже отрисовался)
     * в этом методе нужно отправлять запросы на сервер
     */
    componentDidMount() {
        this.load();
    }

    handleLoadMore = () => {
        this.load();
    }

    render() {
        const {  users, loading } = this.state;
        return (
            <Fragment>
            {loading ? <div>Loading...</div> : <UserList onLoadMore={this.handleLoadMore} users={users} />}
            </Fragment>
        );      
    }
}