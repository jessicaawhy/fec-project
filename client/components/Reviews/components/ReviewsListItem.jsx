import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ReviewsPhotoModal from './ReviewsPhotoModal';
import Flex from '../../styles/Flex.styled';
import ButtonLink from '../../styles/ButtonLink.styled';
import Stars from '../../styles/Stars.styled';
import {
  Item, Header, Summary, Review, Recommend, Footer, Response, ImgIcon,
} from '../styles/ReviewsListItem.styled';
import { formatDate, markReviewHelpful, reportReview } from '../helpers/helpers';

const ReviewsListItem = ({ review }) => {
  const [showReview, setShowReview] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentImg, setCurrentImg] = useState('');
  const [helpful, setHelpful] = useState(false);
  const [reported, setReported] = useState(false);

  const renderModal = (url) => {
    setCurrentImg(url);
    setShowModal(true);
  };

  const handleHelpfulClick = async (e, id) => {
    if (!helpful) {
      const result = await markReviewHelpful(id);
      if (result) {
        setHelpful(result);
        e.target.classList.add('marked');
      }
    }
  };

  const handleReportClick = async (e, id) => {
    if (!reported) {
      const result = await reportReview(id);
      if (result) {
        setReported(result);
        e.target.classList.add('marked');
      }
    }
  };

  return (
    <Item data-testid="review">
      {/* Header */}
      <Header>
        <Stars rating={review.rating} />
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
        review.body.length < 250 || showReview
          ? <p>{review.body}</p>
          : (
            <div>
              <Review>{`${review.body.substring(0, 250)}... ` }</Review>
              <ButtonLink onClick={() => setShowReview(true)}>Show more</ButtonLink>
            </div>
          )
      }

      {
        review.recommend
        && <Recommend classList="recommend">✓ I recommend this product</Recommend>
      }

      {
        review.response
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
                  key={photo.id}
                  src={photo.url}
                  onClick={() => renderModal(photo.url)}
                  alt="Product Review Image"
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
          <ButtonLink onClick={(e) => handleHelpfulClick(e, review.review_id)} type="button">Yes</ButtonLink>
          <span>{`(${review.helpfulness + Number(helpful)})`}</span>
        </Flex>
        <div className="separator">|</div>
        <ButtonLink
          onClick={(e) => handleReportClick(e, review.review_id)}
          type="button"
        >
          {`${reported ? 'Reported' : 'Report'}`}
        </ButtonLink>
      </Footer>
      {
        showModal
        && <ReviewsPhotoModal currentImg={currentImg} setShowModal={setShowModal} />
      }
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
