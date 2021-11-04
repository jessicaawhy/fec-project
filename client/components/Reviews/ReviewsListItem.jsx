import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Flex from '../styles/Flex.styled';
import ButtonLink from '../styles/ButtonLink.styled';
import {
  Item, Header, Summary, Footer, Response, ImgIcon,
} from './styles/ReviewsListItem.styled';
import { formatDate } from './helpers/helpers';

const ReviewsListItem = ({ review }) => {
  const [show, setShow] = useState(false);

  return (
    <Item data-testid="review">
      {/* Header */}
      <Header>
        <span>{review.rating}</span>
        <Flex>
          <span>{`${review.reviewer_name},`}</span>
          <span>{formatDate(review.date)}</span>
        </Flex>
      </Header>

      {/* Body */}
      {
        review.summary.length <= 60
          ? <Summary>{review.summary}</Summary>
          : <Summary>{`${review.summary.substring(0, 60)}...`}</Summary>
      }
      {
        review.body.length < 250 || show
          ? <p>{review.body}</p>
          : (
            <div>
              <span>{`${review.body.substring(0, 250)}... ` }</span>
              <ButtonLink onClick={() => setShow(true)}>Show more</ButtonLink>
            </div>
          )
      }
      {
        review.recommend
        && <span>✓ I recommend this product</span>
      }
      {
        review.response.length > 0
        && (
          <Response>
            <span>Response:</span>
            <span>{review.response}</span>
          </Response>
        )
      }
      {
        review.photos.length > 0
        && (
          <Flex>
            {
              review.photos.map((photo) => (
                <ImgIcon
                  src={photo.url}
                  onClick={() => console.log('toggle modal view!')}
                  alt="Product Image"
                />
              ))
            }
          </Flex>
        )
      }

      {/* Footer */}
      <Footer>
        <Flex>
          <span>Helpful? </span>
          <ButtonLink type="button">Yes</ButtonLink>
          <span>{`(${review.helpfulness})`}</span>
        </Flex>
        <div className="separator">|</div>
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
