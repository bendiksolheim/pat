import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        ajax: state.ajax
    };
}

const Response = ({ ajax }) => (
    <div className="padded-more">
        <form>
            <div className="form-group">
                <textarea className="form-control" readOnly value={JSON.stringify(ajax.response.body)} />
            </div>
        </form>
    </div>
);

export default connect(mapStateToProps)(Response);