import React from 'react';
import PropTypes from 'prop-types';

const Summary = ({ meta }) => {
  const getAverageRating = (ratings) => {
    let total = 0;
    let count = 0;

    for (let i = 0; i < 6; i += 1) {
      if (ratings[i]) {
        const currentCount = Number(ratings[i]);
        count += currentCount;
        total += currentCount * i;
      }
    }

    return total / count;
  };

  const getAverageRec = (recommended) => {
    const trueCount = recommended.true ? Number(recommended.true) : 0;
    const falseCount = recommended.false ? Number(recommended.false) : 0;

    if (trueCount + falseCount === 0) {
      return '0';
    }

    return trueCount / (trueCount + falseCount);
  };

  return (
    <div data-testid="summary-reviews">
      <p>{`${getAverageRating(meta.ratings).toFixed(1)} average rating`}</p>
      <p>{`${(getAverageRec(meta.recommended) * 100).toFixed(0)}% of reviews recommend this product`}</p>
      <div>
        <button type="button">5 stars</button>
        <button type="button">4 stars</button>
        <button type="button">3 stars</button>
        <button type="button">2 stars</button>
        <button type="button">1 stars</button>
      </div>
      <div>summary characteristics go here</div>
    </div>
  );
};

export default Summary;

Summary.propTypes = {
  meta: PropTypes.shape({
    product_id: PropTypes.string,
    ratings: PropTypes.shape({
      1: PropTypes.string,
      2: PropTypes.string,
      3: PropTypes.string,
      4: PropTypes.string,
      5: PropTypes.string,
    }),
    recommended: PropTypes.shape({
      false: PropTypes.string,
      true: PropTypes.string,
    }),
    characteristics: PropTypes.shape({
      Size: PropTypes.shape({
        id: PropTypes.number,
        value: PropTypes.string,
      }),
      Width: PropTypes.shape({
        id: PropTypes.number,
        value: PropTypes.string,
      }),
      Comfort: PropTypes.shape({
        id: PropTypes.number,
        value: PropTypes.string,
      }),
      Quality: PropTypes.shape({
        id: PropTypes.number,
        value: PropTypes.string,
      }),
      Length: PropTypes.shape({
        id: PropTypes.number,
        value: PropTypes.string,
      }),
      Fit: PropTypes.shape({
        id: PropTypes.number,
        value: PropTypes.string,
      }),
    }),
  }).isRequired,
};
