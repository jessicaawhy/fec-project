import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SelectSort from '../styles/SelectSort.styled';
import Button from '../styles/Button.styled';
import StyledReviews from './styles/Reviews.styled';
import FormModal from './FormModal';
import ReviewsList from './ReviewsList';

const Reviews = ({
  product, reviews, sort, setSort,
}) => {
  const [num, setNum] = useState(reviews.length < 2 ? reviews.length : 2);
  const [showModal, setShowModal] = useState(false);

  const handleSelect = (e) => {
    setNum(reviews.length < 2 ? reviews.length : 2);
    setSort(Number(e.target.value));
  };

  const loadMoreReviews = () => {
    if (num + 2 < reviews.length) {
      setNum(num + 2);
    } else {
      setNum(reviews.length);
    }
  };

  return (
    <StyledReviews data-testid="reviews">
      <div>
        {`${reviews.length} reviews, sorted by `}
        {/* eslint-disable-next-line styled-components-a11y/no-onchange */}
        <SelectSort name="sort" id="sort-options" value={sort} onChange={handleSelect}>
          <option value="0">relevance</option>
          <option value="1">helpful</option>
          <option value="2">newest</option>
        </SelectSort>
      </div>
      <ReviewsList reviews={reviews.filter((review, i) => i < num)} />
      <div>
        {
          num < reviews.length
          && <Button type="button" onClick={loadMoreReviews}>MORE REVIEWS</Button>
        }
        <Button type="button" onClick={() => setShowModal(true)}>ADD A REVIEW +</Button>
      </div>
      {
        showModal
        && <FormModal product={product} setShowModal={setShowModal} />
      }
    </StyledReviews>
  );
};

export default Reviews;

Reviews.propTypes = {
  product: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  sort: PropTypes.number.isRequired,
  setSort: PropTypes.func.isRequired,
};
