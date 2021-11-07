import React, { useEffect, useState } from 'react';
import Container from './styles/ReviewsComponent.styled';
import Summary from './Summary';
import Reviews from './Reviews';
import { sortReviews } from './helpers/helpers';

import exampleGetReviews from './sampleData/exampleGetReviews';
import exampleReviewsMeta from './sampleData/exampleReviewsMeta';

const ReviewsComponent = () => {
  const [sort, setSort] = useState(0);
  const [filter, setFilter] = useState({});
  const [reviews] = useState(exampleGetReviews.results);
  const [subset, setSubset] = useState(reviews);

  useEffect(() => {
    setSubset(sortReviews(subset, sort));
  }, [sort]);

  useEffect(() => {
    if (Object.keys(filter).length === 0) {
      setSubset(sortReviews(reviews, sort));
    } else {
      const filtered = [];

      for (let i = 0; i < reviews.length; i += 1) {
        const { rating } = reviews[i];
        if (filter[rating]) {
          filtered.push(reviews[i]);
        }
      }

      setSubset(sortReviews(filtered, sort));
    }
  }, [filter]);

  return (
    <Container id="starRating">
      <Summary filter={filter} setFilter={setFilter} meta={exampleReviewsMeta} />
      {/* todo: update product name here once we start working with the API */}
      {/* alternatively: useContext hook for the product name if needed in other modules */}
      <Reviews product="[Product Name Here]" reviews={subset} sort={sort} setSort={setSort} />
    </Container>
  );
};

export default ReviewsComponent;
