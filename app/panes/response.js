import { connect } from 'react-redux';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/json';
import 'brace/theme/github';

function mapStateToProps(state) {
    return {
        ajax: state.ajax
    };
}

function responseIcon(ok) {
    return ok
        ? 'icon icon-check'
        : 'icon icon-cancel';
}

function display(ajax) {
    if (ajax.hasResponse) {
        return JsonResponse(ajax);
    } else if (ajax.failed) {
        return FailResponse(ajax);
    } else {
        return NoRequest();
    }
}

const Statistics = ({ajax}) => (
    <div className='response-stats'>
        <div className='response-stats__status'>
            <span className={ `${responseIcon(ajax.response.ok)} response-stats__icon` }></span><div className='response-stats__value'>{ajax.response.status}</div>
        </div>
        <div className='response-stats__time'>
            <span className='icon icon-clock response-stats__icon'></span><div className='response-stats__value'>{ajax.end - ajax.start}ms</div>
        </div>
    </div>
);

const NoRequest = () => (
    <div className='response'></div>
);

const JsonResponse = (ajax) => (
    <div className='response'>
        <Statistics ajax={ajax} />
        <AceEditor mode='json' theme='github' name='responsebody' className='response__body' width='100%' height='100px' value= { JSON.stringify(ajax.responseBody, null, 4) }/>
    </div>
);

const FailResponse = (ajax) => (
    <div className='response'>
        <Statistics ajax={ajax} />
        <div className='padded-more response__body'>
            {ajax.response.statusText}
        </div>
    </div>
);

const Response = ({ ajax }) => display(ajax);

export default connect(mapStateToProps)(Response);