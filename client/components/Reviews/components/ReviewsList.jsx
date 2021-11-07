import React from 'react';
import PropTypes from 'prop-types';

import ReviewsListItem from './ReviewsListItem';
import List from '../styles/ReviewsList.styled';

const ReviewsList = ({ reviews }) => (
  <List data-testid="reviews-list">
    {reviews.map((review) => <ReviewsListItem key={review.review_id} review={review} />)}
  </List>
);

export default ReviewsList;

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};
