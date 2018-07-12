import { createStore } from 'redux';
import Connectris from './reducers.js';

var Store = createStore(Connectris, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default Store;
