import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import { CartContainer, CartButton, DropDown } from './styles/AddToCart.style';

const AddToCart = ({ styles }) => (
  <CartContainer
    data-testid="cart-container"
    className="cart-container"
  >
    <CartButton
      data-testid="add-to-cart-button"
      className="add-to-cart-button"
      type="submit"
    >
      Add To Cart
    </CartButton>

    <DropDown
      data-testid="size"
      className="size"
      name="size"
      id="size"
    >
      {map(styles, (style) => (
        // does not yet reflect corresponding size/quantity data
        map(style.skus, (sku) => <option value={`${sku.sku}`}>{sku.size}</option>)
      ))}
    </DropDown>
    <DropDown
      data-testid="quantity"
      className="quantity"
      name="quantity"
      id="quantity"
    >
      {map(styles, (style) => (
        // does not yet reflect corresponding size/quantity data
        map(style.skus, (sku) => <option value={`${sku.sku}`}>{sku.quantity}</option>)
      ))}
    </DropDown>
  </CartContainer>
);

export default AddToCart;

AddToCart.propTypes = PropTypes.shape({
  styles: PropTypes.objectOf(PropTypes.any),
  id: PropTypes.objectOf(PropTypes.any),
}).isRequired;
