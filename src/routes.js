import Content from 'components/Content';
import Questions from 'containers/Questions';
import UserListContainer from 'containers/UserListContainer';

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
        path: '/questions',
        exact: true,
        component: Questions,
        title: 'Вопросы',
    }
]