import { connect } from 'react-redux';
import { ObjectInspector } from 'react-inspector';

function mapStateToProps(state) {
    return {
        ajax: state.ajax
    };
}

const Response = ({ ajax }) => (
    <div className="padded-more">
        <ObjectInspector data={ajax.response.body} expandLevel={10}/>
    </div>
);

export default connect(mapStateToProps)(Response);