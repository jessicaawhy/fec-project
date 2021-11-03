import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReviewsList from './ReviewsList';

const Reviews = ({ reviews }) => {
  const [num, setNum] = useState(2);
  const [sort, setSort] = useState(0);
  const [orderedSubset, setOrderedSubset] = useState([]);

  const updateNum = () => {
    if (num + 2 < reviews.length) {
      setNum(num + 2);
    } else {
      setNum(reviews.length);
    }
  };

  const handleChange = (e) => {
    setSort(Number(e.target.value));
  };

  const sortHelpful = (reviewsArray) => {
    const copy = reviewsArray.slice();

    copy.sort((a, b) => b.helpfulness - a.helpfulness);

    return copy;
  };

  const sortNewest = (reviewsArray) => {
    const copy = reviewsArray.slice();

    copy.sort((a, b) => new Date(b.date) - new Date(a.date));

    return copy;
  };

  const sortRelevant = (reviewsArray) => {
    const copy = reviewsArray.slice();

    copy.sort((a, b) => new Date(b.date) - new Date(a.date));
    copy.sort((a, b) => b.helpfulness - a.helpfulness);

    return copy;
  };

  const sortReviews = (reviewsArray, option) => {
    if (option === 0) {
      return sortRelevant(reviewsArray);
    } if (option === 1) {
      return sortHelpful(reviewsArray);
    }
    return sortNewest(reviewsArray);
  };

  useEffect(() => {
    setOrderedSubset(sortReviews(reviews, sort));
    setNum(2);
  }, [sort]);

  return (
    <div data-testid="reviews">
      <div>
        {`${reviews.length} reviews, sorted by `}
        <select name="sort" id="sort-options" onChange={handleChange}>
          <option value="0">Relevant</option>
          <option value="1">Helpful</option>
          <option value="2">Newest</option>
        </select>
      </div>
      <ReviewsList reviews={orderedSubset.filter((review, i) => i < num)} />
      {
        num < reviews.length
        && <button type="button" onClick={updateNum}>MORE REVIEWS</button>
      }
      <button type="button">ADD A REVIEW</button>
    </div>
  );
};

export default Reviews;

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};
