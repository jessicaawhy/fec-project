import React, { useEffect, useState } from 'react';
import Summary from './Summary';
import Reviews from './Reviews';
import { sortReviews } from './helpers/helpers';

import exampleGetReviews from './exampleGetReviews';
import exampleReviewsMeta from './exampleReviewsMeta';

const ReviewsComponent = () => {
  const [sort, setSort] = useState(0);
  const [reviews, setReviews] = useState(exampleGetReviews.results);
  const [subset, setSubset] = useState(reviews);

  useEffect(() => {
    setSubset(sortReviews(reviews, sort));
  }, [sort]);

  return (
    <>
      <Summary meta={exampleReviewsMeta} />
      <Reviews reviews={subset} setSort={setSort} />
    </>
  );
};

export default ReviewsComponent;
