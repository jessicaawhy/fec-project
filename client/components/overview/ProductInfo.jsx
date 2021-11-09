import React from 'react';
import PropTypes from 'prop-types';
import {
  ProductInfoContainer, CategoryStyle, NameStyle, PriceStyle,
} from './styles/ProductInfo.style';

const ProductInfo = ({ productInfo, currentStyle }) => (
  <ProductInfoContainer data-testid="product-info">
    <CategoryStyle>{productInfo.category}</CategoryStyle>
    <NameStyle>{productInfo.name}</NameStyle>
    <>
      {(currentStyle.sale_price !== null)
        // need to add strikethrough of original price if sale price
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
    </>
  </ProductInfoContainer>
);

export default ProductInfo;
ProductInfo.propTypes = PropTypes.shape({
  products: PropTypes.arrayOf(PropTypes.object),
  styles: PropTypes.objectOf(PropTypes.any),
  id: PropTypes.objectOf(PropTypes.any),
}).isRequired;
