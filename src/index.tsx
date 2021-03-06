import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css'
import App  from './App';
import { StoreProvider } from './store/Store';

ReactDOM.render(
  <StoreProvider>
      <App />
  </StoreProvider>,
  document.getElementById('root')
);
