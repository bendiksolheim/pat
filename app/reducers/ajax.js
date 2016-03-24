import * as c from '../actions/constants';

const initialState = {
    isFetching: false,
    failed: false,
    hasResponse: false,
    response: {}
};

function createResponse(body) {
    return {
        body
    };
}

export default (state = initialState, action) => {
    switch(action.type) {
    case c.AJAX_REQUEST:
        return Object.assign({}, state, {isFetching: true, hasResponse: false, failed: false});
    case c.AJAX_RECEIVE:
        const response = createResponse(action.body);
        return Object.assign({}, state, {isFetching: false, response, hasResponse: true});
    case c.AJAX_FAIL:
        return Object.assign({}, state, {isFetching: false, response: action.response, failed: true});
    default:
        return state;
    }
}