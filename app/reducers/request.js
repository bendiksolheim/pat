import * as c from '../actions/constants';
import update from 'react/lib/update';

const initialState = {
    url: 'http://headers.jsontest.com',
    headers: [
        {id: '0', header:'Authorization', value:'test'}
    ]
};

const isNull = (v) => v === null;

export default (state = initialState, action) => {
    switch (action.type) {
    case c.REQUEST_UPDATE_VALUE:
        return Object.assign({}, state, {
            [action.name]: action.value
        });
    case c.REQUEST_UPDATE_HEADER:
        return update(state, {
            headers: {$set: state.headers.map((header) => {
                if (header.id === action.id) {
                    return {id: header.id, header: isNull(action.header) ? header.header : action.header, value: isNull(action.value) ? header.value : action.value};
                } else {
                    return header;
                }
            })}
        });
    default:
        return state;
    }
}