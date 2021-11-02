import React from 'react';
import PropTypes from 'prop-types';
import ReviewsListItem from './ReviewsListItem';

const ReviewsList = ({ reviews }) => (
  <div data-testid="reviews-list">
    {reviews.map((review) => <ReviewsListItem key={review.review_id} review={review} />)}
  </div>
);

export default ReviewsList;

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};
