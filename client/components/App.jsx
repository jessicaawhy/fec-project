import React from 'react';
import GlobalStyles from './styles/Global';
import OverviewContainer from './overview/OverviewContainer';
import MasterQA from './QuestionsAndAnswers/MasterQA';
import ReviewsComponent from './Reviews/components/ReviewsComponent';

const App = () => (
  <>
    <GlobalStyles />
    {/* place main module components within this fragment */}
    <h1>7 Satsumas</h1>
    <OverviewContainer />
    <MasterQA />
    <ReviewsComponent />
  </>
);

export default App;
