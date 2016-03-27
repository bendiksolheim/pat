import { connect } from 'react-redux';
import { update, updateHeader } from '../actions/request';
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

const Request = ({dispatch, update, updateHeader, request, makeRequest}) => {
    const editHeader = (ev) => updateHeader(ev.target.dataset.id, ev.target.value, null);
    const editValue = (ev) => updateHeader(ev.target.dataset.id, null, ev.target.value);

    return (
        <div className="padded-more">
            <ul className='request__headers'>
                {request.headers.map(({header, value, id}, key) => (
                    <li className='request__header' key={key}>
                        <input className='request__header-key' value={header} data-id={id} onChange={editHeader} />
                        <input className='request__header-value' value={value} data-id={id} onChange={editValue} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default connect(mapStateToProps, {makeRequest, update, updateHeader})(Request);