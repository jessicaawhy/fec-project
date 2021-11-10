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
    console.log('-------------- useEffect() - 1 - OverviewContainer running.... //');
    console.log('Current Style: ', currentStyle);
    getProductStyles(currentProduct, setProductStyles);
    getProductInfo(currentProduct, setProductInfo);
  }, [currentProduct]); /* this also works with currentStyle, why? */

  useEffect(() => {
    console.log('-------------- useEffect() - 2 - OverviewContainer running....');
    console.log('Current Style: ', currentStyle);

    if (productStyles.length > 1) {
      const defaultStyle = () => {
        const initialStyle = productStyles.filter((style) => {
          if (style.default === true) {
            return true;
          }
          return false;
        });
        console.log('initialStyle', initialStyle);
        setCurrentStyle(initialStyle);
      };

      defaultStyle();
    }
  }, [productStyles]);

  // useEffect(() => {
  //   if (productStyles.length > 1) {
  //     // defaultStyle();
  //   }
  // }, [productStyles]);

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

// const [currentStyle, setCurrentStyle] = useState(() => {
//   // if (productStyles.length > 1) {
//   const isDefault = (style) => {
//     console.log(style);
//     if (style.default === true) {
//       return true;
//     }
//     return false;
//   };
//   const initialStyle = productStyles.filter(isDefault);
//   console.log('initialStyle', initialStyle);
//   return initialStyle;
//   // productStyles.forEach((style) => {
//   //   if (style.default) {
//   //     setCurrentStyle(style);
//   //     // console.log(style);
//   //   }
//   // });
//   // }
//   // console.log('no default style');
//   // return 'no default style';
// });
