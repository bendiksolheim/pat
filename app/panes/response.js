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
        <span className={ responseIcon(ajax.response.ok) }></span><div className='response-stats__status'>{ajax.response.status}</div>
        <span className="icon icon-clock"></span><div className='response-stats__time'>{ajax.end - ajax.start}ms</div>
    </div>
);

const NoRequest = () => (
    <div></div>
);

const JsonResponse = (ajax) => (
    <div>
        <Statistics ajax={ajax} />
        <ObjectInspector data={ajax.responseBody} expandLevel={10} />
    </div>
);

const Response = ({ ajax }) => {
    let response = NoRequest();
    if (ajax.hasResponse) {
        response = JsonResponse(ajax);
    }

    return (
        <div className='padded-more'>
            {response}
        </div>
    );
};

export default connect(mapStateToProps)(Response);