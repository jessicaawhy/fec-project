import React from 'react';
import StarRating from './StarRating';
import ProductInfo from './ProductInfo';
import ProductDescription from './ProductDescription';
import ImageGallery from './ImageGallery';
import StyleSelector from './StyleSelector';
import AddToCart from './AddToCart';
import products from '../testData/testProducts';
import styles from '../testData/testStyles';
import id from '../testData/testId';

const OverviewContainer = () => (
  <div data-testid="container">
    <StarRating products={products} />
    <ImageGallery styles={styles} />
    <ProductInfo styles={styles} id={id} />
    <ProductDescription id={id} />
    <StyleSelector styles={styles} />
    <AddToCart styles={styles} />
  </div>
);

export default OverviewContainer;
