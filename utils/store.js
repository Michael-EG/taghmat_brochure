import Cookies from 'js-cookie';
import { createContext, useReducer } from 'react';
import cart from '../pages/cart';

// N.B. All Cookies.set() should be placed here to be in a centralized place

export const Store = createContext();
const initialState = {
  darkMode: Cookies.get('darkMode') === 'ON' ? true : false,
  language: 'EN',
  cart: {
    cartItems: Cookies.get('cartItems')
      ? JSON.parse(Cookies.get('cartItems'))
      : [],
    shippingAddress: Cookies.get('shippingAddress')
      ? JSON.parse(Cookies.get('shippingAddress'))
      : {},
    paymentMethod: Cookies.get('paymentMethod')
      ? Cookies.get('paymentMethod')
      : '',
  },
  userInfo: Cookies.get('userInfo')
    ? JSON.parse(Cookies.get('userInfo'))
    : null,
  requestInfo: Cookies.get('requestInfo')
    ? JSON.parse(Cookies.get('requestInfo'))
    : { loading: false, success: false, error: false },
};

function reducer(state, action) {
  switch (action.type) {
    case 'DARK_MODE_ON':
      return { ...state, darkMode: true };
    case 'DARK_MODE_OFF':
      return { ...state, darkMode: false };

    case 'SET_LOADING':
      return {
        ...state,
        requestInfo: { loading: true, succes: false, error: false },
      };
    case 'SET_SUCCESS':
      return {
        ...state,
        requestInfo: { loading: false, succes: true, error: false },
      };
    case 'SET_FAILURE':
      return {
        ...state,
        requestInfo: { loading: false, succes: false, error: true },
      };

    // case 'SET_ENGLISH':
    //   // Cookies.set('language', 'EN');
    //   return {
    //     ...state,
    //     language: 'EN',
    //   };
    // case 'SET_ARABIC':
    //   // Cookies.set('language', 'AR');
    //   return {
    //     ...state,
    //     language: 'AR',
    //   };

    case 'CART_ADD_ITEM': {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item._id === existItem._id ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      Cookies.set('cartItems', JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case 'CART_REMOVE_ITEM': {
      const cartItems = state.cart.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      Cookies.set('cartItems', JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case 'SAVE_SHIPPING_ADDRESS': {
      Cookies.set('shippingAddress', JSON.stringify(action.payload));
      return {
        ...state,
        cart: { ...state.cart, shippingAddress: action.payload },
      };
    }
    case 'SAVE_PAYMENT_METHOD': {
      Cookies.set('paymentMethod', action.payload);
      return {
        ...state,
        cart: { ...state.cart, paymentMethod: action.payload },
      };
    }
    case 'CART_CLEAR': {
      Cookies.remove('cartItems');
      return { ...state, cart: { ...state.cart, cartItems: [] } };
    }
    case 'USER_LOGIN_SUCCESS': {
      //   console.log(action.payload);
      Cookies.set('userInfo', JSON.stringify(action.payload));
      return { ...state, userInfo: action.payload };
    }
    case 'USER_LOGOUT_REQUEST': {
      return {
        ...state,
        userInfo: null,
        cart: {
          ...cart,
          cartItems: [],
          shippingAddress: {},
          paymentMethod: '',
        },
      };
    }
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
