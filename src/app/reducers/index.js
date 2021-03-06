import { combineReducers } from 'redux'
import productsReducer from './productsReducer'

export default combineReducers({
  // your reducers will go here
  products: productsReducer
})