import React, { useState } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import range from 'lodash/range';
import { CartContainer, CartButton, DropDown } from './styles/AddToCart.style';

const AddToCart = ({ addProductToCart, currentStyle }) => {
  const [currentSize, setCurrentSize] = useState('Size');
  const [currentQuantity, setCurrentQuantity] = useState('Quantity');
  const [currentSku, setCurrentSku] = useState(null);
  const [quantityForSelectedSize, setQuantityForSelectedSize] = useState(null);
  const [cartIsDisabled, setCartIsDisabled] = useState(true);
  const [quantityIsDisabled, setQuantityIsDisabled] = useState(true);

  const handleSizeChange = (event) => {
    const { size, sku, quantity } = JSON.parse(event.target.value);

    setCurrentSize(size);
    setCurrentSku(sku);
    setQuantityForSelectedSize(quantity);
    setQuantityIsDisabled(false);
  };

  const handleQtyChange = (event) => {
    const { value } = event.target;

    setCurrentQuantity(value);
    setCartIsDisabled(false);
  };

  const handleCartButton = () => {
    const id = {
      sku_id: currentSku,
    };

    console.log('AddToCart handleCartButton running....', id);
    addProductToCart(id);
  };

  return (
    <CartContainer
      data-testid="cart-container"
      className="cart-container"
    >
      <CartButton
        data-testid="add-to-cart-button"
        className="add-to-cart-button"
        type="submit"
        onClick={handleCartButton}
        disabled={cartIsDisabled}
      >
        Add To Cart
      </CartButton>

      <DropDown
        data-testid="size"
        className="size"
        name="size"
        onChange={handleSizeChange}
      >
        <option
          selected="selected"
        >
          {currentSize}

        </option>
        {map(currentStyle.skus, (sku) => (
          <>
            <option
              value={JSON.stringify(sku)}
            >

              {sku.size}
            </option>
          </>
        ))}
      </DropDown>
      <DropDown
        data-testid="quantity"
        className="quantity"
        name="quantity"
        onChange={handleQtyChange}
        disabled={quantityIsDisabled}
      >
        <option
          selected="selected"
        >
          {currentQuantity}

        </option>

        {
            (currentSku)
            && range(1, quantityForSelectedSize + 1).map((num) => (
              <option
                value={`${num}`}
              >
                {num}
              </option>
            ))
          }

      </DropDown>
    </CartContainer>
  );
};

export default AddToCart;

AddToCart.propTypes = PropTypes.shape({
  styles: PropTypes.objectOf(PropTypes.any),
  id: PropTypes.objectOf(PropTypes.any),
}).isRequired;

/* ************************************************** */
/*
const [alertQuantity, setAlertQuantity] = useState(false);
setAlertQuantity(true);
setAlertQuantity(false);

{
  // TODO: alert to let user know to select size before quantity
  // (does not work as implemented below)
  (alertQuantity)
  &&

<p>Please select a size before choosing a quantity.</p>}

********************

addToCart(sku, qty);

*/
