import * as c from '../actions/constants';
import update from 'react/lib/update';

const initialState = {
    url: 'http://headers.jsontest.com',
    headers: [
        {id: '0', header:'Authorization', value:'test'},
        {id: '1', header:'', value:''}
    ]
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

export default (state = initialState, action) => {
    switch (action.type) {
    case c.REQUEST_UPDATE_VALUE:
        return Object.assign({}, state, {
            [action.name]: action.value
        });
    case c.REQUEST_UPDATE_HEADER:
        return update(state, {
            headers: { $set: state.headers.map(updateHeader(action)) }
        });
    default:
        return state;
    }
}