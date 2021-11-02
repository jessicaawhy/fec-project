import React from 'react';
import StarRating from './StarRating';
import ProductInfo from './ProductInfo';
import ProductDescription from './ProductDescription';
import ImageGallery from './ImageGallery';
import StyleSelector from './StyleSelector';
import AddToCart from './AddToCart';
// import ProductContext from '../../ProductContext';

const OverviewContainer = () => (
  <div data-testid="container">
    <StarRating />
    <ProductInfo />
    <ProductDescription />
    <ImageGallery />
    <StyleSelector />
    <AddToCart />
  </div>
);

export default OverviewContainer;
