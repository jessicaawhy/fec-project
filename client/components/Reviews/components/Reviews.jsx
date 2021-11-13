import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import ReviewsList from './ReviewsList';
import FormModal from './FormModal';
import SelectSort from '../../styles/SelectSort.styled';
import Button from '../../styles/Button.styled';
import StyledReviews from '../styles/Reviews.styled';

const Reviews = ({
  total, reviews, sort, setSort, meta,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [num, setNum] = useState(reviews.length < 2 ? reviews.length : 2);

  const handleSelect = (e) => {
    setSort(e.target.value);
  };

  const loadMoreReviews = () => {
    if (num + 2 < reviews.length) {
      setNum(num + 2);
    } else {
      setNum(reviews.length);
    }
  };

  useEffect(() => {
    setNum(2);
  }, [sort]);

  return (
    <StyledReviews data-testid="reviews">
      <div>
        {`${total} reviews, sorted by `}
        <SelectSort name="sort" id="sort-options" value={sort} onChange={handleSelect}>
          <option value="relevance">relevance</option>
          <option value="helpful">helpful</option>
          <option value="newest">newest</option>
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
        && <FormModal setShowModal={setShowModal} meta={meta} />
      }
    </StyledReviews>
  );
};

export default Reviews;

Reviews.propTypes = {
  total: PropTypes.number.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  sort: PropTypes.number.isRequired,
  setSort: PropTypes.func.isRequired,
  meta: PropTypes.shape({
    product_id: PropTypes.number,
    ratings: {
      1: PropTypes.number,
      2: PropTypes.number,
      3: PropTypes.number,
      4: PropTypes.number,
      5: PropTypes.number,
    },
    recommended: {
      true: PropTypes.string,
      false: PropTypes.string,
    },
    characteristics: {
      Fit: {
        id: PropTypes.number,
        value: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.null,
        ]),
      },
      Length: {
        id: PropTypes.number,
        value: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.null,
        ]),
      },
      Comfort: {
        id: PropTypes.number,
        value: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.null,
        ]),
      },
      Quality: {
        id: PropTypes.number,
        value: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.null,
        ]),
      },
    },
  }).isRequired,
};
