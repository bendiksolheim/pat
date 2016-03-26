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

    return (
        <div className="padded-more">
            Headers
        </div>
    );
};

export default connect(mapStateToProps, {makeRequest, update})(Request);