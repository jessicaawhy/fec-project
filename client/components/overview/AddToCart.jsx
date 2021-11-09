import React, { useState } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import range from 'lodash/range';
import { CartContainer, CartButton, DropDown } from './styles/AddToCart.style';

const AddToCart = ({ productStyles, currentStyle }) => {
  const [currentSize, setCurrentSize] = useState('Size');
  const [currentQuantity, setCurrentQuantity] = useState('Quantity');

  const handleSizeChange = (event) => {
    console.log('size value', event.target.value);
    setCurrentSize(event.target.value);
  };

  const handleQtyChange = (event) => {
    console.log('qty value', event.target.value);
    setCurrentQuantity(event.target.value);
  };

  const handleClick = () => {
    console.log('AddToCart handleClick running....');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('AddToCart handleSubmit running....');
    // addToCart(sku, qty);
  };

  return (
    <form onSubmit={handleSubmit}>
      {console.log('currentStyle', currentStyle)}
      <CartContainer
        data-testid="cart-container"
        className="cart-container"
      >
        <CartButton
          data-testid="add-to-cart-button"
          className="add-to-cart-button"
          type="submit"
          onClick={handleClick}
        >
          Add To Cart
        </CartButton>

        <DropDown
          data-testid="size"
          className="size"
          name="size"
          id="size"
        >
          {map(currentStyle.skus, (sku) => (
          // does not yet reflect corresponding size/quantity data
            <option
              value={`${sku.size}`}
              onChange={handleSizeChange}
            >
              {sku.size}
            </option>
          ))}
        </DropDown>
        <DropDown
          data-testid="quantity"
          className="quantity"
          name="quantity"
          id="quantity"
        >
          {
          (typeof currentSize === 'number')
            ? (
              map(currentStyle.skus, (sku) => {
                // does not yet reflect corresponding size/quantity data
                const itemQuantity = range(sku.quantity);
                console.log(itemQuantity);

                // return map(itemQuantity, (num) => (
                //   <option
                //     value={`${num}`}
                //     onChange={handleQtyChange}
                //   >
                //     {num}
                //   </option>
                // ));
              }))
            : (
              { currentSize }
            )
        }
        </DropDown>
      </CartContainer>
    </form>
  );
};

export default AddToCart;

AddToCart.propTypes = PropTypes.shape({
  styles: PropTypes.objectOf(PropTypes.any),
  id: PropTypes.objectOf(PropTypes.any),
}).isRequired;
