import { connect } from 'react-redux';
import { ObjectInspector } from 'react-inspector';

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
    <div></div>
);

const JsonResponse = (ajax) => (
    <div>
        <Statistics ajax={ajax} />
        <div className='padded-more'>
            <ObjectInspector data={ajax.responseBody} expandLevel={10} />
        </div>
    </div>
);

const Response = ({ ajax }) => {
    let response = NoRequest();
    if (ajax.hasResponse) {
        response = JsonResponse(ajax);
    }

    return response;
};

export default connect(mapStateToProps)(Response);