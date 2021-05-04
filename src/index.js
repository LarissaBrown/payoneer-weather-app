import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
import { Provider } from 'react-redux'
import store from './store'

store.dispatch({ type: '_localItems/_localItemAdded', payload: 'God help me!' })


console.log('State after dispatch: ', store.getState())


const rootElement =  document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
 
);


