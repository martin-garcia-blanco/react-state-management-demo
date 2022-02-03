import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppHooks from './AppHooks';
import AppRedux from './AppRedux';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import pokemonStore from './store/reducers'
import { Provider } from 'react-redux'


const myStore = createStore(pokemonStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
      {/* <AppHooks /> */}
      <AppRedux />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
