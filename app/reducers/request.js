import * as c from '../actions/constants';
import update from 'react/lib/update';

const initialState = {
    url: 'https://httpbin.org/headers',
    headers: [
        {id: '0', header:'Authorization', value:'test'},
        {id: '1', header:'', value:''}
    ],
    body: ''
};

function updateHeader(action) {
    return function(header) {
        if (header.id === action.id) {
            return {id: header.id, header: action.header, value: action.value};
        } else {
            return header;
        }
    }
}

function updateHeaders(action, state) {
    const headers = state.headers.map(updateHeader(action));
    const hasEmptyInputs = headers.some((header) => (
        header.header == '' && header.value == ''
    ));
    if (!hasEmptyInputs) {
        const id = headers[headers.length - 1].id + 1;
        headers.push({id: id, header: '', value: ''});
    }
    return headers;
}

function addHeader(headers) {
    const copy = headers.slice();
    const id = copy[copy.length - 1].id + 1;
    copy.push({id: id, header: '', value: ''});
    return copy;
}

export default (state = initialState, action) => {
    switch (action.type) {
    case c.REQUEST_UPDATE_VALUE:
        return Object.assign({}, state, {
            [action.name]: action.value
        });
    case c.REQUEST_UPDATE_HEADER:
        return update(state, {
            headers: { $set: updateHeaders(action, state) }
        });
    default:
        return state;
    }
}