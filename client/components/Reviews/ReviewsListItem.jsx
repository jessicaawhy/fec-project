import React from 'react';
import PropTypes from 'prop-types';

const ReviewsListItem = ({ review }) => (
  <div>
    {/* this will need to be updated to display rating stars */}
    <span>{review.rating}</span>
    {/* verified needs to be updated to a checkmark */}
    <span>{`${review.recommend ? 'Verified ' : ''}${review.reviewer_name}`}</span>
    {/* add library here to adjust date format */}
    <span>{review.date}</span>
    {/* the summary neds to allow truncattion in the future */}
    <p>{review.summary}</p>
    <p>{review.body}</p>
    <div>
      <span>Helpful? </span>
      <button type="button">Yes</button>
      <span>{`(${review.helpfulness})`}</span>
      <button type="button">Report</button>
    </div>
  </div>
);

export default ReviewsListItem;

ReviewsListItem.propTypes = {
  review: PropTypes.shape({
    review_id: PropTypes.number,
    rating: PropTypes.number,
    summary: PropTypes.string,
    recommend: PropTypes.bool,
    response: PropTypes.string,
    body: PropTypes.string,
    date: PropTypes.string,
    reviewer_name: PropTypes.string,
    helpfulness: PropTypes.number,
    photos: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};
