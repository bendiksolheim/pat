import * as c from './constants';

export function update(name, value) {
    return function(dispatch) {
        dispatch({
            type: c.REQUEST_UPDATE_VALUE,
            name,
            value
        });
    };
}

export function request(verb) {
    return function(dispatch, getState) {
        console.log(getState());
        dispatch({
            type: c.REQUEST_MAKE_REQUEST,
            verb
        });
    };
}