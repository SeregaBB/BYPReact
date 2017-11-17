import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import reducers from './reducers';
import AppRouter from './router';


const store = createStore(combineReducers(reducers),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store={store}><AppRouter /></Provider>, document.getElementById('root'));
registerServiceWorker();
