import React, { useEffect } from 'react';
import { useProduct, useAllProductsUpdate } from '../ProductContext';
import { StyledContainer, StyledHeader, ModulesContainer } from './styles/App.styled';
import GlobalStyles from './styles/Global';
import SelectProduct from './SelectProduct';
import OverviewContainer from './overview/OverviewContainer';
import MasterQA from './QuestionsAndAnswers/MasterQA';
import ReviewsComponent from './Reviews/components/ReviewsComponent';

const App = () => {
  const updateAll = useAllProductsUpdate();
  const product = useProduct();

  useEffect(async () => {
    fetch('/products/1/50')
      .then((response) => response.json())
      .then((data) => updateAll(data));
  }, []);

  return (
    product
    && (
      <StyledContainer>
        <GlobalStyles />
        <StyledHeader>
          <h1>7 Satsumas</h1>
          <SelectProduct />
        </StyledHeader>

        <ModulesContainer>
          <OverviewContainer />
          <MasterQA />
          <ReviewsComponent />
        </ModulesContainer>
      </StyledContainer>
    )
  );
};

export default App;
