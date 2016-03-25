import * as c from './constants';

function ajaxRequest() {
    return {
        type: c.AJAX_REQUEST
    };
}

function ajaxReceive(response, body) {
    return {
        type: c.AJAX_RECEIVE,
        response,
        body
    };
}

function ajaxFail(response) {
    return {
        type: c.AJAX_FAIL,
        response
    };
}

function getUrl(url) {
    return url.indexOf('http') === 0
        ? url
        : `http://${url}`;
}

function createRequestObject(request) {
    const url = getUrl(request.url.trim());
    return new Request(url, {
        method: request.method
    });
}

export function makeRequest(request) {
    return function(dispatch) {
        dispatch(ajaxRequest());

        return fetch(createRequestObject(request))
            .then(function(response) {
                response.json().then(function(body) {
                    dispatch(ajaxReceive(response, body));
                });
            })
            .catch(function(ex) {
                console.log(arguments);
                dispatch(ajaxFail(ex));
            });
    }
}