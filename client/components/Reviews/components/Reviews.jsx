import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ReviewsList from './ReviewsList';
import FormModal from './FormModal';
import SelectSort from '../../styles/SelectSort.styled';
import Button from '../../styles/Button.styled';
import StyledReviews from '../styles/Reviews.styled';

const Reviews = ({
  product, reviews, sort, setSort, page, setPage,
}) => {
  console.log(reviews);
  const [showModal, setShowModal] = useState(false);

  const handleSelect = (e) => {
    setSort(e.target.value);
  };

  return (
    <StyledReviews data-testid="reviews">
      <div>
        {/* {`${reviews.length} reviews, sorted by `} */}
        {/* eslint-disable-next-line styled-components-a11y/no-onchange */}
        <SelectSort name="sort" id="sort-options" value={sort} onChange={handleSelect}>
          <option value="relevance">relevance</option>
          <option value="helpful">helpful</option>
          <option value="newest">newest</option>
        </SelectSort>
      </div>
      <ReviewsList reviews={reviews} />
      <div>
        <Button type="button" onClick={() => setPage(page + 1)}>MORE REVIEWS</Button>
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
