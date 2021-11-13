import React from 'react';
import PropTypes from 'prop-types';

import {
  ProductInfoContainer, CategoryStyle, NameStyle, PriceStyle,
} from './styles/ProductInfo.style';

const ProductInfo = ({ productInfo, currentStyle }) => (
  <ProductInfoContainer data-testid="product-info">
    <CategoryStyle>
      All Products /
      {productInfo.category}

    </CategoryStyle>
    <NameStyle>{productInfo.name}</NameStyle>
    {(currentStyle.sale_price !== null)
      ? (
        <PriceStyle>
          $
          {currentStyle.sale_price}
          <strike>{currentStyle.original_price}</strike>
        </PriceStyle>
      )
      : (
        <PriceStyle>
          $
          {currentStyle.original_price}
        </PriceStyle>
      )}
  </ProductInfoContainer>
);

export default ProductInfo;

ProductInfo.propTypes = {
  productInfo: PropTypes.objectOf(PropTypes.any),
  currentStyle: PropTypes.objectOf(PropTypes.any),
}.isRequired;
