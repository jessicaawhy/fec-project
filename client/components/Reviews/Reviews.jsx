import React from 'react';
import PropTypes from 'prop-types';
import ReviewsList from './ReviewsList';

const Reviews = ({ reviews }) => (
  <div data-testid="reviews">
    <div>
      {`${reviews.length} reviews, sorted by `}
      <button type="button">relevance</button>
    </div>
    <ReviewsList reviews={reviews} />
    <button type="button">MORE REVIEWS</button>
    <button type="button">ADD A REVIEW</button>
  </div>
);

export default Reviews;

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};
