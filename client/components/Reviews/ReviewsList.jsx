import React from 'react';
import PropTypes from 'prop-types';
import List from './styles/ReviewsList.styled';
import ReviewsListItem from './ReviewsListItem';

const ReviewsList = ({ reviews }) => (
  <List data-testid="reviews-list">
    {reviews.map((review) => <ReviewsListItem key={review.review_id} review={review} />)}
  </List>
);

export default ReviewsList;

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};
