import * as c from '../actions/constants';

const initialState = {
    isFetching: false,
    failed: false,
    hasResponse: false,
    start: 0,
    end: 0,
    response: null,
    responseBody: null
};

export default (state = initialState, action) => {
    switch(action.type) {
    case c.AJAX_REQUEST:
        return Object.assign({}, state, {isFetching: true, hasResponse: false, failed: false, start: Date.now()});
    case c.AJAX_RECEIVE:
        return Object.assign({}, state, {isFetching: false, response: action.response, responseBody: action.body, hasResponse: true, end: Date.now()});
    case c.AJAX_FAIL:
        return Object.assign({}, state, {isFetching: false, response: action.response, failed: true});
    default:
        return state;
    }
}