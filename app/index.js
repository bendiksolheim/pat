import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import PaneGroup from './components/panegroup';
import Pane from './components/pane';
import MainPane from './panes/main';
import Request from './panes/request';

const App = React.createClass({
    render() {
        return (
            <div className="window">
                <header className="toolbar toolbar-header">
                    <Request />
                </header>
                <div className="window-content">
                    <PaneGroup>
                        <Pane sidebar={true} />
                        <Pane className='pane--main'>
                            <MainPane />
                        </Pane>
                    </PaneGroup>
                </div>
            </div>
        );
    }
});

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#app')
);