import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  ADD_TO_CART,
} from '../Constants/actionTypes';
import items from '../data';
import _ from 'lodash';
const initialState = {
  cartItems: [],
  items,
  quantity: 0,
  total: 0
};

export const cartCounter = (state = initialState, action) => {
  let newState = {...state};
    switch (action.type) {
        case ADD_TO_CART:          
            const data = items.map(item => item.data);
            const dataItem = data.flat().find(item => item.id === action.payload);
            dataItem.quantity += 1;
            newState.total = newState.total + Number(dataItem.price);
            newState.cartItems =  _.uniqBy([...newState.cartItems, dataItem], 'id');

            break;
        case DECREMENT_COUNTER:
            const datas = items.map(item => item.data);
            const dataItems = datas.flat().find(item => item.id === action.payload);
            if(dataItems.quantity === 1) {
                dataItems.quantity -= 1;
                newState.total = newState.total - Number(dataItems.price);
                newState.cartItems = newState.cartItems.filter(items => items.id !== action.payload);
            } else {
                dataItems.quantity -= 1;
                newState.total = newState.total - Number(dataItems.price);
                newState.cartItems = _.uniqBy([...newState.cartItems, dataItems], 'id');
            }
            break;
    }
  return newState;
};


// switch (action.type) {
//     case ADD_TO_CART:
//       let arr = items
//         .flat(2)
//         .map(item => item.data)
//         .flat()
//         .find(item => item.id == action.payload);
//       const existedItem = newState.cartItems.find(item => item.id === action.payload);
//       if(existedItem){
//         newState.quantity += arr.quantity;
//         arr.quantity += 1;
//       } else {
//         arr.quantity = 1;
//         newState.quantity = 1;
//         newState.cartItems = [...newState.cartItems, arr];
//       }
//       break;
//     case INCREMENT_COUNTER:
//         let arrInc = items
//         .flat(2)
//         .map(item => item.data)
//         .flat()
//         .find(item => item.id == action.payload);
//         const quantity = arrInc.quantity + 1;
//         arrInc.quantity = quantity;
//         newState.cartItems = _.uniqBy([...newState.cartItems, arrInc], 'id')
//         newState.quantity += 1;
//         console.log(newState, 'sdns')
//       break;
//     case DECREMENT_COUNTER:
//       const {id} = action.payload;
//       let arrDec = items
//         .flat(2)
//         .map(item => item.data)
//         .flat()
//         .find(item => item.id == action.payload);
//         if (arrDec.quantity === 1) {
//             const quantityDec = arrDec.quantity - 1;
//             const items = newState.cartItems.filter(item => item.id !== action.payload);
//             newState.cartItems = items
//             console.log(newState, 'removed', item)
//         } else {
//             const quantityDec = arrDec.quantity - 1;
//             arrDec.quantity = quantityDec;
//             newState.cartItems = _.uniqBy([...newState.cartItems, arrDec], 'id')
//             newState.quantity -= 1;
//             console.log(newState, 'sdns')
//         }
        
        
//       break;
//   }