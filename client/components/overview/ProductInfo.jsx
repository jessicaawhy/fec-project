import React from 'react';
import PropTypes from 'prop-types';
import {
  ProductInfoContainer, CategoryStyle, NameStyle, PriceStyle,
} from './styles/ProductInfo.style';

const ProductInfo = ({ /* styles */ productInfo }) => (
  <ProductInfoContainer data-testid="product-info">
    <CategoryStyle>{productInfo.category}</CategoryStyle>
    <NameStyle>{productInfo.name}</NameStyle>
    <PriceStyle>
      $
      {productInfo.default_price}
    </PriceStyle>
  </ProductInfoContainer>
);

export default ProductInfo;
ProductInfo.propTypes = PropTypes.shape({
  products: PropTypes.arrayOf(PropTypes.object),
  styles: PropTypes.objectOf(PropTypes.any),
  id: PropTypes.objectOf(PropTypes.any),
}).isRequired;
