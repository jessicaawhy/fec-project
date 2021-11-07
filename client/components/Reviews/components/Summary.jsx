import React from 'react';
import PropTypes from 'prop-types';

import SummaryRatingItem from './SummaryRatingItem';
import SummaryCharItem from './SummaryCharItem';
import ButtonLink from '../../styles/ButtonLink.styled';
import Stars from '../../styles/Stars.styled';
import {
  Header, FiltersContainer, RatingsContainer, CharContainer,
} from '../styles/Summary.styled';
import { getAverageRating, getAverageRec, getRatingBreakdown } from '../helpers/helpers';

const Summary = ({ meta, filter, setFilter }) => {
  const currentFilter = Object.keys(filter);
  const averageRating = getAverageRating(meta.ratings);
  const ratingsBreakdown = getRatingBreakdown(meta.ratings);

  return (
    <div data-testid="summary-reviews">
      <Header>
        <span>{averageRating.toFixed(1)}</span>
        <Stars rating={averageRating} />
      </Header>

      <FiltersContainer>
        <p>{`${(getAverageRec(meta.recommended) * 100).toFixed(0)}% of reviews recommend this product`}</p>
        {
          currentFilter.length > 0
          && (
            <>
              <div>
                <span>Current ratings filter:</span>
                <span>{`[ ${currentFilter.join(', ')} ]`}</span>
              </div>
              <ButtonLink onClick={() => setFilter({})} type="button">Remove all filters</ButtonLink>
            </>
          )
        }
      </FiltersContainer>

      <RatingsContainer>
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
      </RatingsContainer>

      <CharContainer>
        {
          Object.keys(meta.characteristics).map((char) => (
            <SummaryCharItem
              char={char}
              percent={((meta.characteristics[char].value - 1) / (5 - 1)) * 100}
            />
          ))
        }
      </CharContainer>
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
