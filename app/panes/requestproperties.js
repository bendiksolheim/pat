import { connect } from 'react-redux';
import { update, updateHeader } from '../actions/request';
import { makeRequest } from '../actions/ajax';
import AceEditor from 'react-ace';

import 'brace/mode/json';
import 'brace/theme/github';

function mapStateToProperties(state) {
    return {
        request: state.request
    };
}

const Header = connect(mapStateToProperties, {updateHeader})(({updateHeader, header, value, headerid}) => {
    const editHeader = (ev) => updateHeader(ev.target.dataset.id, ev.target.value, value);
    const editValue = (ev) => updateHeader(ev.target.dataset.id, header, ev.target.value);

    return (
        <li className='request__header'>
            <input className='request__header-key' value={header} data-id={headerid} onChange={editHeader} placeholder='Header' />
            <input className='request__header-value' value={value} data-id={headerid} onChange={editValue} placeholder='Value' />
        </li>
    );
});

const Body = connect(mapStateToProperties, {update})(({update, request}) => {
    const updateBody = (newValue) => update('body', newValue);

    return (
        <AceEditor mode='json' theme='github' name='requestbody' className='request__body' width='100%' height='100px' onChange={updateBody} value={request.body} showPrintMargin={false}/>
    );
});

const Request = ({request}) => (
    <div className="padded-more">
        <ul className='request__headers'>
            {request.headers.map(({header, value, id}) => (
                <Header header={header} value={value} headerid={id} key={id}/>
            ))}
        </ul>
        <Body />
    </div>
);

export default connect(mapStateToProperties)(Request);