import React from 'react';
import PropTypes from 'prop-types';

const ProductInfo = ({ /* styles */ id }) => (
  <div data-testid="productInfo">
    <h3>{id.category}</h3>
    <h1>{id.name}</h1>
    <p>
      $
      {id.default_price}
    </p>
  </div>

);

export default ProductInfo;

ProductInfo.propTypes = PropTypes.shape({
  products: PropTypes.arrayOf(PropTypes.object),
  styles: PropTypes.objectOf(PropTypes.any),
  id: PropTypes.objectOf(PropTypes.any),
}).isRequired;
