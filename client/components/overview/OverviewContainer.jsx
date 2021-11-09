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

  const addProductToCart = (id) => {
    console.log('addProductToCart running...');
    fetch('http://localhost:3000/overview/cart', {
      method: 'POST',
      body: JSON.stringify(id),
      // data: JSON.stringify(id),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(async (response) =>
        // try {
        //   const data = await response.json();
        //   console.log('response data?', data);
        // } catch (error) {
        //   console.log('Error happened here!');
        //   console.log(error);
        // }
        response.json())
      .then((data) => {
        console.log('product added to cart', data);
      })
      .catch((error) => {
        console.log('error in adding product to cart', error);
      });
  };

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
          <AddToCart
            addProductToCart={addProductToCart}
            currentStyle={currentStyle}
          />
        </RightColumn>

        <ProductDescription productInfo={productInfo} />
      </Grid>
    </Container>
  );
};

export default OverviewContainer;
