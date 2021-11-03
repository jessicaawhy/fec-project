import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ReviewsListItem = ({ review }) => {
  const formatDate = (date) => (
    new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  );

  const Item = styled.div`
  > * {
    // margin: 15px 0;
    padding: 10px;
  };
  // border: 1px solid black;
`;

  const Header = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  const HeaderDetail = styled.div`
    > span {
      padding: 4px;
    };
  `;

  const Summary = styled.div`
    font-weight: bold;
  `;

  const Body = styled.div`
  `;

  const Footer = styled.div`
    > * {
      font-size: inherit;
    }
  `;

  const ButtonLink = styled.button`
    background-color: inherit;
    border: none;
    text-decoration: underline;
    cursor: pointer;
    &:active {
      transform: translateY(1px);
    }
  `;

  return (
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
};

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
