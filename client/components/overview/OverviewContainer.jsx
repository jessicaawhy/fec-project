import React, { useState, useEffect } from 'react';
import StarRating from './StarRating';
import ProductInfo from './ProductInfo';
import ProductDescription from './ProductDescription';
import ImageGallery from './ImageGallery';
import StyleSelector from './StyleSelector';
import AddToCart from './AddToCart';
import products from './tests/testData/testProducts';
// import mockStyles from './tests/testData/formattedStyles';
// import id from './tests/testData/testId';
import { useProduct } from '../../ProductContext';
// import { getProductStyles } from './helpers/helpers';
import {
  RightColumn, Container, Grid, LeftColumn,
} from './styles/OverviewContainerColumns.style';

const OverviewContainer = () => {
  const [currentProduct, setCurrentProduct] = useState(useProduct());
  const [styles, setStyles] = useState([{}]);
  const [id, setId] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/overview/${currentProduct.id}/styles`)
      .then((response) => response.json())
      .then((data) => {
        setStyles(data);
      })
      .catch((error) => {
        console.log(`error in fetching data for id ${currentProduct.id}`, error);
      });

    fetch(`http://localhost:3000/overview/${currentProduct.id}`)
      .then((response) => response.json())
      .then((data) => {
        setId(data);
      })
      .catch((error) => {
        console.log(`error in fetching id ${currentProduct.id}`, error);
      });
  }, []);

  return (
    <Container data-testid="container">
      <Grid>
        <LeftColumn>
          <ImageGallery styles={styles} />
        </LeftColumn>

        <RightColumn>
          <StarRating products={products} />
          <ProductInfo
            styles={styles}
            id={id}
          />
          <StyleSelector styles={styles} />
          <AddToCart styles={styles} />
        </RightColumn>

        <ProductDescription id={id} />
      </Grid>
    </Container>
  );
};

export default OverviewContainer;
