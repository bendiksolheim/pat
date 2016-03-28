import { connect } from 'react-redux';
import { update, updateHeader } from '../actions/request';
import { makeRequest } from '../actions/ajax';

function handleChange(dispatch) {
    return (event) => dispatch(update('url', event.target.value));
}

function createRequestObject(method, request) {
    return Object.assign({}, request, { method });
}

function mapStateToProperties(state) {
    return {
        request: state.request
    };
}

const Header = connect(mapStateToProperties, {updateHeader})(({updateHeader, header, value, id}) => {
    const editHeader = (ev) => updateHeader(ev.target.dataset.id, ev.target.value, value);
    const editValue = (ev) => updateHeader(ev.target.dataset.id, header, ev.target.value);

    return (
        <li className='request__header'>
            <input className='request__header-key' value={header} data-id={id} onChange={editHeader} placeholder='Header' />
            <input className='request__header-value' value={value} data-id={id} onChange={editValue} placeholder='Value' />
        </li>
    );
});

const Request = ({dispatch, update, updateHeader, request, makeRequest}) => {

    return (
        <div className="padded-more">
            <ul className='request__headers'>
                {request.headers.map(({header, value, id}) => (
                    <Header header={header} value={value} id={id} key={id}/>
                ))}
            </ul>
        </div>
    );
};

export default connect((state) => ({request: state.request}), {makeRequest, update})(Request);