import {INCREMENT_COUNTER, DECREMENT_COUNTER, ADD_TO_CART} from '../Constants/actionTypes';
export const addItemToCart = (payload) => ({type: ADD_TO_CART, payload})
export const addToCart = (payload) => ({type: INCREMENT_COUNTER, payload});
export const deductFromCart = (payload) => ({type:DECREMENT_COUNTER, payload});
