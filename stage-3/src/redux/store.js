import {createStore} from 'redux';
import reducer from './reducer';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import {applyMiddleware} from 'redux';

export default createStore(reducer, applyMiddleware(reduxPromiseMiddleware()));