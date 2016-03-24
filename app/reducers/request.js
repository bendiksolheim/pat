import * as c from '../actions/constants';

const initialState = {
    url: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
    case c.REQUEST_UPDATE_VALUE:
        return Object.assign({}, state, {
            [action.name]: action.value
        });
    default:
        return state;
    }
}