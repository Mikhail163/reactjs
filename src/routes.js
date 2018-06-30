import Content from 'components/Content';
import Questions from 'containers/Questions';
import UserListContainer from 'containers/UserListContainer';
import User from 'containers/UserContainer';

export default [
    {
        path: '/',
        exact: true,
        component: Content,
        title: 'Главная',
    },
    {
        path: '/users',
        exact: true,
        component: UserListContainer,
        title: 'Пользователи',
    },
    {
        path: '/users/:id',
        exact: true,
        component: User,
    },
    {
        path: '/questions',
        exact: true,
        component: Questions,
        title: 'Вопросы',
    }
]