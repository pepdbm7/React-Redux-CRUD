import { combineReducers } from 'redux' //to put together reducers we'll use
import productReducer from './productsReducer'


export default combineReducers({
    products: productReducer
})