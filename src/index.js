import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import {store} from './redux/store';

import App from './App';
import reportWebVitals from './reportWebVitals';

// import { setTopic, setDisplayMode } from './actions';

// store.dispatch(setTopic('javascript'));
// store.dispatch(setDisplayMode('THUMBNAIL')

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// function showState() {
//   const state = store.getState();
// }

// store.subscribe(showState);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
