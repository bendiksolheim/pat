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

function toHeaders(headerArray) {
    return headerArray.reduce((mem, {header, value}) => {
        if (header !== '' && value != '') {
            mem[header] = value;
        }
        return mem;
    }, {});
}

function getRequestOptions(request) {
    const requestOptions = {
        method: request.method
    };

    if (request.headers) {
        requestOptions.headers = toHeaders(request.headers);
    }

    if (request.body) {
        requestOptions.body = request.body;
    }

    return requestOptions;
}

function createRequestObject(request) {
    const url = getUrl(request.url.trim());
    const requestOptions = getRequestOptions(request);
    return new Request(url, requestOptions);
}

export function makeRequest(request) {
    return function(dispatch) {
        dispatch(ajaxRequest());

        return fetch(createRequestObject(request))
            .then(function(response) {
                if (!response.ok) {
                    dispatch(ajaxFail(response));
                } else {
                    response.json().then(function(body) {
                        dispatch(ajaxReceive(response, body));
                    });
                }
            })
            .catch(function(ex) {
                dispatch(ajaxFail(ex));
            });
    }
}