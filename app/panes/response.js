import { connect } from 'react-redux';
import { ObjectInspector } from 'react-inspector';

function mapStateToProps(state) {
    return {
        ajax: state.ajax
    };
}

const NoRequest = () => (
    <div></div>
);

const JsonResponse = (ajax) => (
    <ObjectInspector data={ajax.response.body} expandLevel={10} />
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