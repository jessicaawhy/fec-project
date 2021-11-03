import React from 'react';
import PropTypes from 'prop-types';

const ProductDescription = ({ id }) => (
  <div data-testid="productDescription">
    <h4>{id.slogan}</h4>
    <p>{id.description}</p>
    <h5>Features</h5>
    <ul>
      {id.features.map((feature) => (
        <li>{`${feature.feature}: ${feature.value}`}</li>
      ))}
    </ul>
  </div>
);

export default ProductDescription;

ProductDescription.propTypes = PropTypes.shape({
  products: PropTypes.arrayOf(PropTypes.object),
  styles: PropTypes.objectOf(PropTypes.any),
  id: PropTypes.objectOf(PropTypes.any),
}).isRequired;
