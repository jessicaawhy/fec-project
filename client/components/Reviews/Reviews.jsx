import React from 'react';
import PropTypes from 'prop-types';
import ReviewsList from './ReviewsList';

const Reviews = ({ reviews }) => (
  <div data-testid="reviews">
    <div>
      {`${reviews.count} reviews, sorted by `}
      <button type="button">relevance</button>
    </div>
    <ReviewsList reviews={reviews} />
  </div>
);

export default Reviews;

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};
