import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReviewsList from './ReviewsList';

const Reviews = ({ reviews }) => {
  const [num, setNum] = useState(2);

  const updateNum = () => {
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
        <button type="button">relevance</button>
      </div>
      <ReviewsList reviews={reviews.filter((review, i) => i < num)} />
      {
        num < reviews.length
        && <button type="button" onClick={updateNum}>MORE REVIEWS</button>
      }
      <button type="button">ADD A REVIEW</button>
    </div>
  );
};

export default Reviews;

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};
