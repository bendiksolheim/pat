import React from 'react';
import { render } from 'react-dom';

const App = React.createClass({
    render() {
        return <span>Hallo</span>;
    }
});

render(<App />, document.querySelector('#app'));