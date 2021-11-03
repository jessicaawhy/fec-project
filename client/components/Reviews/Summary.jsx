import React from 'react';
import PropTypes from 'prop-types';
import { getAverageRating, getAverageRec } from './helpers/helpers';

const Summary = ({ meta, filter, setFilter }) => {
  const currentFilter = Object.keys(filter);

  const updateFilter = (e) => {
    const copy = { ...filter };

    if (!copy[e.target.value]) {
      copy[e.target.value] = true;
    } else {
      delete copy[e.target.value];
    }

    setFilter(copy);
  };

  return (
    <div data-testid="summary-reviews">
      <p>{`${getAverageRating(meta.ratings).toFixed(1)} average rating`}</p>
      <p>{`${(getAverageRec(meta.recommended) * 100).toFixed(0)}% of reviews recommend this product`}</p>
      {
        currentFilter.length > 0
        && (
        <div>
          <p>
            Current ratings filter:
            {' '}
            {currentFilter.join(', ')}
          </p>
          <button onClick={() => setFilter({})} type="button">Remove all filters</button>
        </div>
        )
      }
      <div>
        <button value={5} onClick={updateFilter} type="button">5 stars</button>
        <button value={4} onClick={updateFilter} type="button">4 stars</button>
        <button value={3} onClick={updateFilter} type="button">3 stars</button>
        <button value={2} onClick={updateFilter} type="button">2 stars</button>
        <button value={1} onClick={updateFilter} type="button">1 stars</button>
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
  filter: PropTypes.shape({}).isRequired,
  setFilter: PropTypes.func.isRequired,
};
