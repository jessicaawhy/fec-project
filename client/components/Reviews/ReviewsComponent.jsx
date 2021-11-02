import React from 'react';
import Summary from './Summary';
import Reviews from './Reviews';

import exampleGetReviews from './exampleGetReviews';
import exampleReviewsMeta from './exampleReviewsMeta';

const ReviewsComponent = () => (
  <>
    <Summary meta={exampleReviewsMeta} />
    <Reviews reviews={exampleGetReviews.results} />
  </>
);

export default ReviewsComponent;
