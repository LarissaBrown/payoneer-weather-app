
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
// import {
//   sayHiOnDispatch,
//   includeMeaningOfLife
// } from './enhancers'
import thunk from 'redux-thunk'

//const composedEnhancer = compose(sayHiOnDispatch, includeMeaningOfLife)
const middlewareEnhancer = applyMiddleware(thunk)
const store = createStore(
  rootReducer,
  middlewareEnhancer)


export default store