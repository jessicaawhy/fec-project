import React, { useState, useEffect } from 'react';

import StarRating from './StarRating';
import ProductInfo from './ProductInfo';
import ProductDescription from './ProductDescription';
import ImageGallery from './ImageGallery';
import StyleSelector from './StyleSelector';
import AddToCart from './AddToCart';

import { useProduct } from '../../ProductContext';
import { getProductInfo, getProductStyles } from './helpers/api';
import {
  RightColumn, Grid, LeftColumn,
} from './styles/OverviewContainerColumns.style';
// import { getMetaData, getAverageRating } from '../Reviews/helpers/helpers';

const OverviewContainer = () => {
  const currentProduct = useProduct();
  const [productStyles, setProductStyles] = useState([{}]);
  const [currentStyle, setCurrentStyle] = useState({});
  const [productInfo, setProductInfo] = useState({});

  useEffect(() => {
    getProductStyles(currentProduct, setProductStyles);
    getProductInfo(currentProduct, setProductInfo);
  }, [currentProduct]);

  useEffect(() => {
    if (productStyles.length > 1 || productStyles[0].style_id) {
      const defaultStyle = productStyles.filter((style) => style.default)[0];
      const initialStyle = defaultStyle || productStyles[0];

      setCurrentStyle(initialStyle);
    }
  }, [productStyles]);

  return (
    currentStyle
    && (
      <div>
        <Grid data-testid="grid">
          <LeftColumn>
            <ImageGallery
              currentStyle={currentStyle}
            />
          </LeftColumn>

          <RightColumn>
<<<<<<< HEAD
            {/* <Stars averageRating={averageRating} /> */}
            <StarRating products={products} />
=======
            <StarRating />
>>>>>>> 0c2d0fbe37d5bec3d4bbf75cd7e09e679a3a7796
            <ProductInfo
              productInfo={productInfo}
              currentStyle={currentStyle}
            />
            <StyleSelector
              productStyles={productStyles}
              currentStyle={currentStyle}
              setCurrentStyle={setCurrentStyle}
            />
            <AddToCart
              currentStyle={currentStyle}
            />
          </RightColumn>

          <ProductDescription productInfo={productInfo} />
        </Grid>
      </div>
    )
  );
};

export default OverviewContainer;
