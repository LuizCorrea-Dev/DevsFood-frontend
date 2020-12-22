import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import CartRecuder from './CartReducer';

export default combineReducers({
    user: UserReducer,
    cart: CartRecuder
});