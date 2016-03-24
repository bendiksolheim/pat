import * as c from '../actions/constants';

const initialState = {
    isFetching: false,
    failed: false,
    response: {}
};

export default (state = initialState, action) => {
    switch(action.type) {
    case c.AJAX_REQUEST:
        return Object.assign({}, state, {isFetching: true});
    case c.AJAX_RECEIVE:
        return Object.assign({}, state, {isFetching: false, response: action.response, failed: false});
    case c.AJAX_FAIL:
        return Object.assign({}, state, {isFetching: false, response: action.response, failed: true});
    default:
        return state;
    }
}