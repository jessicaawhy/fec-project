import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, SelectSort } from './styles/Reviews.styled';
import ReviewsList from './ReviewsList';

const Reviews = ({ reviews, sort, setSort }) => {
  const [num, setNum] = useState(reviews.length < 2 ? reviews.length : 2);

  const handleSelect = (e) => {
    setNum(reviews.length < 2 ? reviews.length : 2);
    setSort(Number(e.target.value));
  };

  const loadMoreReviews = () => {
    if (num + 2 < reviews.length) {
      setNum(num + 2);
    } else {
      setNum(reviews.length);
    }
  };

  return (
    <div data-testid="reviews">
      <div>
        {`${reviews.length} reviews, sorted by `}
        {/* eslint-disable-next-line styled-components-a11y/no-onchange */}
        <SelectSort name="sort" id="sort-options" value={sort} onChange={handleSelect}>
          <option value="0">relevance</option>
          <option value="1">helpful</option>
          <option value="2">newest</option>
        </SelectSort>
      </div>
      <ReviewsList reviews={reviews.filter((review, i) => i < num)} />
      {
        num < reviews.length
        && <Button type="button" onClick={loadMoreReviews}>MORE REVIEWS</Button>
      }
      <Button type="button">ADD A REVIEW +</Button>
    </div>
  );
};

export default Reviews;

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSort: PropTypes.func.isRequired,
};
