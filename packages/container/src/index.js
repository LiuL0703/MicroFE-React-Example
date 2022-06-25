import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import apps from './apps';
import AppManager from './AppManager';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

const add  = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return { ...state, sum: state.sum + action.value };
    default: return state;
  }
}
const store = createStore(add, { sum: 10 })

function renderApp () {
  apps.forEach(AppManager.registerApp)
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}
renderApp()

export {
  React,
  ReactDOM
}