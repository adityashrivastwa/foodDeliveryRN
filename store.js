import {createStore, applyMiddleware} from 'redux';
import { cartCounter } from './reducers/cart_reducer';


const store = createStore(cartCounter);

export default store;