import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
console.log(333333)
localStorage.setItem('fff', 'fsgdfgdfg')
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
