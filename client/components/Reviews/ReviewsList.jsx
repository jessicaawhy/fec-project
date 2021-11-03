import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReviewsListItem from './ReviewsListItem';

const ReviewsList = ({ reviews }) => {
  const List = styled.div`
    > :not(:last-child) {
      border-bottom: 1px solid black;
    };
    margin: 25px 0;
  `;

  return (
    <List data-testid="reviews-list">
      {reviews.map((review) => <ReviewsListItem key={review.review_id} review={review} />)}
    </List>
  );
};

export default ReviewsList;

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};
