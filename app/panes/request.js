import { connect } from 'react-redux';
import { update } from '../actions/request';
import { makeRequest } from '../actions/ajax';

function handleChange(dispatch) {
    return (event) => dispatch(update('url', event.target.value));
}

function createRequestObject(method, request) {
    return Object.assign({}, request, { method });
}

function mapStateToProps(state) {
    return {
        request: state.request
    };
}

const Request = ({dispatch, update, request, makeRequest}) => {
    const handleUpdate = (ev) => update('url', ev.target.value);
    const get = () => makeRequest(createRequestObject('get', request));
    const post = () => makeRequest(createRequestObject('post', request));

    return (
        <div className="request">
            <div className="form-group form-group--header">
                <input type="text" className="input input--header request-input" placeholder="URL" onChange={handleUpdate} value={request.url} />
            </div>
            <button className="button button--header" onClick={get}>GET</button>
            <button className='button button--header' onClick={post}>POST</button>
        </div>
    );
};

export default connect(mapStateToProps, {makeRequest, update})(Request);