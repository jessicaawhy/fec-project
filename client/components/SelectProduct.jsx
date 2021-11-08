import React from 'react';
import {
  useProduct, useProductUpdate, useAllProducts,
} from '../ProductContext';

import SelectSort from './styles/SelectSort.styled';

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
        <SelectSort name="product" onChange={handleSelect}>
          {
            allProducts.map((curr, i) => (<option value={i}>{curr.name}</option>))
          }
        </SelectSort>
      </>
    )
  );
};

export default SelectProduct;
