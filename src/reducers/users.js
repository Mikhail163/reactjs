import { handleActions } from 'redux-actions';

import { loadStarted, loadCompleted, loadFailed } from 'actions/users';

const initialState = {
    loading: false,
    error: null,
    entries: [],
    page: 1
};

export default handleActions({
    [loadStarted]: (state) => {

        return {
            ...state,
            error: null,
            loading: true,
        };
    },
    [loadCompleted]: (state, action) => {
        return {
            ...state,
            page: state.page + 1,
            entries: state.entries.concat(action.payload),
            loading: false,
        };
    },
    [loadFailed]: (state, action) => {
        return {
            ...state,
            loading: false,
            error: action.payload,
        }
    }
}, initialState )