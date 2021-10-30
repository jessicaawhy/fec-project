import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ProductContext = React.createContext();
export const ProductContextUpdate = React.createContext();

export const useProduct = () => (
  useContext(ProductContext)
);

export const useProductUpdate = () => (
  useContext(ProductContextUpdate)
);

export const ProductProvider = ({ children }) => {
  // hardcoded product id
  // may need to update this if the DB is updated & product doesn't exist anymore
  // consider fetching all products on app initialization & picking one to render
  const [product, setProduct] = useState(61575);

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
