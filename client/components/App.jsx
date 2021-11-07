import React, { useEffect } from 'react';
import { useProduct, useAllProductsUpdate } from '../ProductContext';
import GlobalStyles from './styles/Global';
import SelectProduct from './SelectProduct';
import OverviewContainer from './overview/OverviewContainer';
import MasterQA from './QuestionsAndAnswers/MasterQA';
import ReviewsComponent from './Reviews/components/ReviewsComponent';

const App = () => {
  const updateAll = useAllProductsUpdate();
  const product = useProduct();

  useEffect(async () => {
    fetch('http://localhost:3000/products/1/10')
      .then((response) => response.json())
      .then((data) => updateAll(data));
  }, []);

  return (
    product
    && (
      <>
        <GlobalStyles />
        <SelectProduct />
        {/* place main module components within this fragment */}
        <h1>7 Satsumas</h1>
        <OverviewContainer />
        <MasterQA />
        <ReviewsComponent />
      </>
    )
  );
};

export default App;
