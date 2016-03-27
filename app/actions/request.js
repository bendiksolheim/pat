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

export function updateHeader(id, header, value) {
    return function(dispatch) {
        dispatch({
            type: c.REQUEST_UPDATE_HEADER,
            id,
            header,
            value
        });
    };
}

export function request(verb) {
    return function(dispatch) {
        dispatch({
            type: c.REQUEST_MAKE_REQUEST,
            verb
        });
    };
}