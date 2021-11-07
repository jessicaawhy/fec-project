import React, {
  useEffect, useState, useRef,
} from 'react';

import Summary from './Summary';
import Reviews from './Reviews';
import Container from '../styles/ReviewsComponent.styled';
import { getData, getMetaData } from '../helpers/helpers';

const ReviewsComponent = () => {
  const isInitialMount = useRef(true);
  const [sort, setSort] = useState('relevance');
  const [filter, setFilter] = useState({});
  const [reviews, setReviews] = useState(null);
  const [subset, setSubset] = useState(null);
  const [meta, setMeta] = useState(null);

  useEffect(async () => {
    const [updatedReviews, updatedMeta] = await Promise.all([
      getData(61576, 1, 100, sort), getMetaData(61576),
    ]);

    setReviews(updatedReviews.results);
    setMeta(updatedMeta);
    setFilter({});

    isInitialMount.current = false;
  }, [sort]);

  useEffect(() => {
    if (!isInitialMount.current) {
      if (Object.keys(filter).length === 0) {
        setSubset(reviews);
      } else {
        const filtered = [];

        for (let i = 0; i < reviews.length; i += 1) {
          const { rating } = reviews[i];
          if (filter[rating]) {
            filtered.push(reviews[i]);
          }
        }

        setSubset(filtered);
      }
    }
  }, [filter]);

  return (
    meta && subset
      && (
        <Container id="starRating">
          <Summary
            filter={filter}
            setFilter={setFilter}
            meta={meta}
          />
          {/* todo: update product name here once we start working with the API */}
          {/* alternatively: useContext hook for the product name if needed in other modules */}
          <Reviews
            product="[Product Name Here]"
            total={reviews.length}
            reviews={subset}
            sort={sort}
            setSort={setSort}
          />
        </Container>
      )
  );
};

export default ReviewsComponent;
