import { handleActions } from 'redux-actions';

import { loadUsers } from 'actions/users';

const initialState = {
    loading: false,
    entries: []
};

export default handleActions({
    [loadUsers]: (state, action) => {

        return {
            ...state,
            entries: [
                { id: 1, name: 'Vasya' },
                { id: 2, name: 'Petya' }
            ]
        };
    }
}, initialState )