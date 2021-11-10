import React, { useState, useEffect } from 'react';
import StarRating from './StarRating';
import ProductInfo from './ProductInfo';
import ProductDescription from './ProductDescription';
import ImageGallery from './ImageGallery';
import StyleSelector from './StyleSelector';
import AddToCart from './AddToCart';
import products from './tests/testData/testProducts';
// import Stars from '../styles/Stars.styled';
import { useProduct } from '../../ProductContext';
import { getProductInfo, getProductStyles } from './helpers/api';
import {
  RightColumn, Container, Grid, LeftColumn,
} from './styles/OverviewContainerColumns.style';

const OverviewContainer = () => {
  const currentProduct = useProduct();
  const [productStyles, setProductStyles] = useState([{}]);
  const [currentStyle, setCurrentStyle] = useState({});
  const [productInfo, setProductInfo] = useState({});

  useEffect(() => {
    getProductInfo(currentProduct, setProductInfo);
    getProductStyles(currentProduct, setProductStyles);
  }, []);

  return (
    <Container data-testid="container">
      <Grid>
        <LeftColumn>
          <ImageGallery productStyles={productStyles} />
        </LeftColumn>

        <RightColumn>
          <StarRating products={products} />
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
    </Container>
  );
};

export default OverviewContainer;
