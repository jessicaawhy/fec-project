import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReviewsList from './ReviewsList';

const Reviews = ({ reviews, setSort }) => {
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
        <select name="sort" id="sort-options" onChange={handleSelect}>
          <option value="0">Relevant</option>
          <option value="1">Helpful</option>
          <option value="2">Newest</option>
        </select>
      </div>
      <ReviewsList reviews={reviews.filter((review, i) => i < num)} />
      {
        num < reviews.length
        && <button type="button" onClick={loadMoreReviews}>MORE REVIEWS</button>
      }
      <button type="button">ADD A REVIEW</button>
    </div>
  );
};

export default Reviews;

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSort: PropTypes.func.isRequired,
};
