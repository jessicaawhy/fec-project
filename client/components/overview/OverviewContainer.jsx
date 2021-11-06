import React from 'react';
import StarRating from './StarRating';
import ProductInfo from './ProductInfo';
import ProductDescription from './ProductDescription';
import ImageGallery from './ImageGallery';
import StyleSelector from './StyleSelector';
import AddToCart from './AddToCart';
import products from './tests/testData/testProducts';
import styles from './tests/testData/testStyles';
import id from './tests/testData/testId';
import {
  RightColumn, Container, Grid, LeftColumn,
} from './styles/OverviewContainerColumns.style';

const OverviewContainer = () => (
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

export default OverviewContainer;
