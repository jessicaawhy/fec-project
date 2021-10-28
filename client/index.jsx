import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { ProductProvider } from './components/ProductContext';

render(
  <ProductProvider>
    <App />
  </ProductProvider>,
  document.getElementById('root'),
);
