import React from 'react';
import PropTypes from 'prop-types';
import ButtonLink from '../styles/ButtonLink.styled';
import {
  Item, Header, HeaderDetail, Summary, Body, Footer,
} from './styles/ReviewsListItem.styled';
import { formatDate } from './helpers/helpers';

const ReviewsListItem = ({ review }) => (
  <Item data-testid="review">
    <Header>
      <div>{review.rating}</div>
      <HeaderDetail>
        {
          review.recommend
          && <span>✓</span>
        }
        <span>{`${review.reviewer_name},`}</span>
        <span>{formatDate(review.date)}</span>
      </HeaderDetail>
    </Header>
    <Summary>{review.summary}</Summary>
    <Body>{review.body}</Body>
    <Footer>
      <span>Helpful? </span>
      <ButtonLink type="button">Yes</ButtonLink>
      <span>{`(${review.helpfulness})`}</span>
      <ButtonLink type="button">Report</ButtonLink>
    </Footer>
  </Item>
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
