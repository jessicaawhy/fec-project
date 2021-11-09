import React, { useState } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import range from 'lodash/range';
import { CartContainer, CartButton, DropDown } from './styles/AddToCart.style';

const AddToCart = ({ /* productStyles, */ currentStyle }) => {
  const [currentSize, setCurrentSize] = useState('Size');
  const [currentQuantity, setCurrentQuantity] = useState('Quantity');
  const [quantityForSelectedSize, setQuantityForSelectedSize] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);
  const [currentSku, setCurrentSku] = useState(null);

  const handleSizeChange = (event) => {
    const { size, sku, quantity } = JSON.parse(event.target.value);
    setCurrentSize(size);
    setCurrentSku(sku);
    setQuantityForSelectedSize(quantity);
    setIsDisabled(false);
  };

  const handleQtyChange = (event) => {
    setCurrentQuantity(event.target.value);
  };

  const handleClick = () => {
    console.log('AddToCart handleClick running....');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('AddToCart handleSubmit running....');
  };

  const handleQtyDropDown = () => {
    if (currentSize === 'Size') {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  };

  const renderQuantityOptions = () => {
    const availableQuantity = range(1, quantityForSelectedSize + 1);

    return availableQuantity.map((num) => (
      <option
        value={`${num}`}
        onChange={handleQtyChange}
      >
        {num}
      </option>
    ));
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
          id="quantity"
          onClick={handleQtyDropDown}
          disabled={isDisabled}
        >
          <option
            selected="selected"
          >
            {currentQuantity}

          </option>

          {
            (currentSku)
            && renderQuantityOptions()
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
