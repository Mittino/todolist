import React from 'react';
import { render } from
react-dom;
import { Provider } from
react-redux;
import { createStore } from
redux;
import todoApp from './reducers'; //TODO create this file
import App from './components/App'; //TODO create this

let store = createStore(todoApp);

render(
  <Provider store = {store}>
    <App />
  </Provider>
  document.getElementById('root')
)
