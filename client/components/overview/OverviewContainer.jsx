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
import {
  RightColumn, Container, Grid, LeftColumn,
} from './styles/OverviewContainerColumns.style';

const OverviewContainer = () => {
  const currentProduct = useProduct();
  const [productStyles, setProductStyles] = useState([{}]);
  const [currentStyle, setCurrentStyle] = useState({});
  const [productInfo, setProductInfo] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/overview/${currentProduct.id}/styles`)
      .then((response) => response.json())
      .then((data) => {
        setProductStyles(data);
      })
      .catch((error) => {
        console.log(`error in fetching data for id ${currentProduct.id}`, error);
      });

    fetch(`http://localhost:3000/overview/${currentProduct.id}`)
      .then((response) => response.json())
      .then((data) => {
        setProductInfo(data);
      })
      .catch((error) => {
        console.log(`error in fetching id ${currentProduct.id}`, error);
      });
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
          <AddToCart productStyles={productStyles} />
        </RightColumn>

        <ProductDescription productInfo={productInfo} />
      </Grid>
    </Container>
  );
};

export default OverviewContainer;
