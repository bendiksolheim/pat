import * as c from './constants';

function ajaxRequest() {
    return {
        type: c.AJAX_REQUEST
    };
}

function ajaxReceive(response) {
    return {
        type: c.AJAX_RECEIVE,
        response
    };
}

function ajaxFail(response) {
    return {
        type: c.AJAX_FAIL,
        response
    };
}

function createRequestObject(request) {
    return new Request(request.url, {
        method: request.method
    });
}

export function makeRequest(request) {
    return function(dispatch) {
        dispatch(ajaxRequest());

        return fetch(createRequestObject(request))
            .then(function(response) {
                console.log(arguments);
                dispatch(ajaxReceive(response));
            })
            .catch(function(ex) {
                console.log(arguments);
                dispatch(ajaxFail(ex));
            });
    }
}