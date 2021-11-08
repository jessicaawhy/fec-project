import React from 'react';

import {
  useProduct, useProductUpdate, useAllProducts,
} from '../ProductContext';

const SelectProduct = () => {
  const allProducts = useAllProducts();
  const product = useProduct();
  const setProduct = useProductUpdate();

  const handleSelect = (e) => {
    setProduct(e.target.value);
  };

  return (
    product
    && (
      <>
        <select name="product" onChange={handleSelect}>
          {
            allProducts.map((curr, i) => (<option value={i}>{curr.name}</option>))
          }
        </select>
      </>
    )
  );
};

export default SelectProduct;
