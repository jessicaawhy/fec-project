import React, {
  useEffect, useState, useRef,
} from 'react';
import { useProduct } from '../../../ProductContext';

import Summary from './Summary';
import Reviews from './Reviews';
import Container from '../styles/ReviewsComponent.styled';
import { getData, getMetaData } from '../helpers/helpers';

const ReviewsComponent = () => {
  const current = useProduct();
  const isInitialMount = useRef(true);

  const [product, setProduct] = useState(current);
  const [sort, setSort] = useState('relevance');
  const [filter, setFilter] = useState({});
  const [reviews, setReviews] = useState(null);
  const [subset, setSubset] = useState(null);
  const [meta, setMeta] = useState(null);

  useEffect(() => {
    setProduct(current);
  }, [current]);

  useEffect(async () => {
    const [updatedReviews, updatedMeta] = await Promise.all([
      getData(product.id, 1, 100, sort), getMetaData(product.id),
    ]);

    setReviews(updatedReviews.results);
    setMeta(updatedMeta);
    setFilter({});

    isInitialMount.current = false;
  }, [product, sort]);

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
          <Reviews
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
