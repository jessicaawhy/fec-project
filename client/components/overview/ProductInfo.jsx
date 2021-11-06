import React from 'react';
import PropTypes from 'prop-types';
import {
  ProductInfoContainer, CategoryStyle, NameStyle, PriceStyle,
} from './styles/ProductInfo.style';

const ProductInfo = ({ /* styles */ id }) => (
  <ProductInfoContainer data-testid="product-info">
    <CategoryStyle>{id.category}</CategoryStyle>
    <NameStyle>{id.name}</NameStyle>
    <PriceStyle>
      $
      {id.default_price}
    </PriceStyle>
  </ProductInfoContainer>
);

export default ProductInfo;
ProductInfo.propTypes = PropTypes.shape({
  products: PropTypes.arrayOf(PropTypes.object),
  styles: PropTypes.objectOf(PropTypes.any),
  id: PropTypes.objectOf(PropTypes.any),
}).isRequired;
