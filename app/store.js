import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { ajax, request} from './reducers';

const reducer = combineReducers({
    ajax,
    request
});

const logger = createLogger();

const finalCreateStore = compose(
    applyMiddleware(thunk, logger)
)(createStore);

const store = finalCreateStore(reducer);

export default store;