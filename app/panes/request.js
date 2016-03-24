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
        <form className="padded-more">
            <div className="form-group">
                <input type="text" className="form-control" placeholder="URL" onBlur={handleUpdate} />
            </div>
            <div className="btn-group">
                <button className="btn btn-large btn-default" type="button" onClick={get}>
                    <span>GET</span>
                </button>
                <button className="btn btn-large btn-disabled" type="button" disabled>
                    <span>POST</span>
                </button>
                <button className="btn btn-large btn-disabled" type="button" disabled>
                    <span>PUT</span>
                </button>
                <button className="btn btn-large btn-disabled" type="button" disabled>
                    <span>DELETE</span>
                </button>
            </div>
        </form>
    );
};

export default connect(mapStateToProps, {makeRequest, update})(Request);