import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import { CartContainer, CartButton, DropDown } from './styles/AddToCart.style';

const AddToCart = ({ styles }) => (
  <CartContainer data-testid="addToCart">
    <CartButton type="submit">Add To Cart</CartButton>
    <DropDown
      name="sizes"
      id="sizes"
    >
      {styles.results.map((style) => (
        map(style.skus, (sku) => (
          // does not yet reflect corresponding size/quantity data
          <option value={`${sku}`}>{sku.size}</option>
        ))
      ))}
    </DropDown>
    <DropDown
      name="quantity"
      id="quantity"
    >
      {styles.results.map((style) => (
        map(style.skus, (sku) => (
          // does not yet reflect corresponding size/quantity data
          <option value={`${sku}`}>{sku.quantity}</option>
        ))
      ))}
    </DropDown>
  </CartContainer>
);

export default AddToCart;

AddToCart.propTypes = PropTypes.shape({
  styles: PropTypes.objectOf(PropTypes.any),
  id: PropTypes.objectOf(PropTypes.any),
}).isRequired;
