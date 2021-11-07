import React, { useEffect, useState, useMemo } from 'react';

import Summary from './Summary';
import Reviews from './Reviews';
import Container from '../styles/ReviewsComponent.styled';

const ReviewsComponent = () => {
  const [sort, setSort] = useState('relevance');
  const [filter, setFilter] = useState({});
  const [reviews, setReviews] = useState(null);
  const [subset, setSubset] = useState(null);
  const [meta, setMeta] = useState(null);
  const [page, setPage] = useState(1);
  const [num, setNum] = useState(20);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`http://localhost:3000/reviews/61576/${page}/${num}/${sort}`);
      const data = await response.json();
      setReviews(data.results);
      setSubset(data.results);
    };

    const getMetaData = async () => {
      const response = await fetch('http://localhost:3000/reviews/meta/61576/');
      const data = await response.json();
      setMeta(data);
    };

    getData();
    getMetaData();
  }, []);

  return (
    meta && subset
      && (
        <Container id="starRating">
          {/* {console.log('subset: ', subset)} */}
          <Summary filter={filter} setFilter={setFilter} meta={meta} />
          {/* todo: update product name here once we start working with the API */}
          {/* alternatively: useContext hook for the product name if needed in other modules */}
          <Reviews product="[Product Name Here]" reviews={subset} sort={sort} setSort={setSort} page={page} setPage={setPage} />
        </Container>
      )
  );
};

export default ReviewsComponent;
