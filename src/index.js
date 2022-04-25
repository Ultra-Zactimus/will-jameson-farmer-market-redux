import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import reducer from './reducers/farmers-market-reducer';
import { Provider } from 'react-redux';
const produce = require('./seed/produce.json');

const store = createStore(reducer, {...produce});
// https://redux.js.org/usage/structuring-reducers/initializing-state

store.subscribe(() =>
  console.log(store.getState())
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {console.log(store.getState())}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();