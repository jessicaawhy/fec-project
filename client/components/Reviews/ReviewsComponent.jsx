import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Summary from './Summary';
import Reviews from './Reviews';
import { sortReviews } from './helpers/helpers';

import exampleGetReviews from './exampleGetReviews';
import exampleReviewsMeta from './exampleReviewsMeta';

const ReviewsComponent = () => {
  const Container = styled.div`
    display: grid;
    grid-template-columns: 30% 70%;
    margin: 0 50px;
  `;

  // Summary = styled(Summary)`
  // `;

  const [sort, setSort] = useState(0);
  const [filter, setFilter] = useState({});
  const [reviews, setReviews] = useState(exampleGetReviews.results);
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
    <Container>
      <Summary filter={filter} setFilter={setFilter} meta={exampleReviewsMeta} />
      <Reviews reviews={subset} setSort={setSort} />
    </Container>
  );
};

export default ReviewsComponent;
