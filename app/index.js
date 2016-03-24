import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import PaneGroup from './components/panegroup';
import Pane from './components/pane';
import MainPane from './panes/main';

const App = React.createClass({
    render() {
        return (
            <PaneGroup>
                <Pane sidebar={true} />
                <Pane>
                    <MainPane />
                </Pane>
            </PaneGroup>
        );
    }
});

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#app')
);