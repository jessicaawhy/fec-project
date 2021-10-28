import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

const ProductContext = React.createContext();
const ProductContextUpdate = React.createContext();

export const useProduct = () => (
  useContext(ProductContext)
);

export const useProductUpdate = () => (
  useContext(ProductContextUpdate)
);

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState(null);

  const updateProduct = (id) => (
    setProduct(id)
  );

  return (
    <ProductContext.Provider value={product}>
      <ProductContextUpdate.Provider value={updateProduct}>
        { children }
      </ProductContextUpdate.Provider>
    </ProductContext.Provider>
  );
};

ProductProvider.propTypes = {
  children: PropTypes.elementType.isRequired,
};
