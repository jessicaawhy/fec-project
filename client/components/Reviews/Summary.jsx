import React from 'react';
import PropTypes from 'prop-types';
import {
  LinkContainer, ButtonLink, CharBorder, CharMarker,
} from './styles/Summary.styled';

import SummaryRatingItem from './SummaryRatingItem';
import { getAverageRating, getAverageRec } from './helpers/helpers';

const Summary = ({ meta, filter, setFilter }) => {
  const currentFilter = Object.keys(filter);
  const ratingsTotal = Object.values(meta.ratings).reduce((acc, curr) => acc + Number(curr), 0);
  const ratingsBreakdown = [1, 2, 3, 4, 5].map((x) => (meta.ratings[x] || 0) / ratingsTotal);

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
          <ButtonLink onClick={() => setFilter({})} type="button">Remove all filters</ButtonLink>
        </div>
        )
      }
      <LinkContainer>
        {
          [5, 4, 3, 2, 1].map(
            (curr) => (
              <SummaryRatingItem
                value={curr}
                width={ratingsBreakdown[curr - 1] * 100}
                filter={filter}
                setFilter={setFilter}
              />
            ),
          )
        }
      </LinkContainer>
      {
        Object.keys(meta.characteristics).map((char) => (
          <div>
            {char}
            <CharBorder>
              <CharMarker style={{ left: `${(meta.characteristics[char].value / 5) * 100}%` }} />
            </CharBorder>
          </div>
        ))
      }
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
