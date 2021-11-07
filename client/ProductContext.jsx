import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

/* ALL PRODUCT */

export const AllProductsContext = React.createContext();
export const AllProductsContextUpdate = React.createContext();

export const useAllProducts = () => (
  useContext(AllProductsContext)
);

export const useAllProductsUpdate = () => (
  useContext(AllProductsContextUpdate)
);

/* CURRENT PRODUCT */

export const ProductContext = React.createContext();
export const ProductContextUpdate = React.createContext();

export const useProduct = () => (
  useContext(ProductContext)
);

export const useProductUpdate = () => (
  useContext(ProductContextUpdate)
);

/* PROVIDER */

export const ProductProvider = ({ children }) => {
  const [allProducts, setAllProduct] = useState([]);
  const [product, setProduct] = useState(null);

  const updateAllProducts = (productsArr) => (
    setAllProduct(productsArr)
  );

  const updateProduct = (num) => {
    setProduct(allProducts[num] || null);
  };

  useEffect(() => {
    setProduct(allProducts[0] || null);
  }, [allProducts]);

  return (
    <AllProductsContext.Provider value={allProducts}>
      <AllProductsContextUpdate.Provider value={updateAllProducts}>
        <ProductContext.Provider value={product}>
          <ProductContextUpdate.Provider value={updateProduct}>
            { children }
          </ProductContextUpdate.Provider>
        </ProductContext.Provider>
      </AllProductsContextUpdate.Provider>
    </AllProductsContext.Provider>
  );
};

ProductProvider.propTypes = {
  children: PropTypes.elementType.isRequired,
};
