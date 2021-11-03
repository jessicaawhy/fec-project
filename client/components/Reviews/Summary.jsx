import React from 'react';
import PropTypes from 'prop-types';
import {
  LinkContainer, RatingContainer, ButtonLink, ProgressBorder, ProgressBar, CharBorder, CharMarker,
} from './styles/Summary.styled';
import { getAverageRating, getAverageRec } from './helpers/helpers';

const Summary = ({ meta, filter, setFilter }) => {
  const currentFilter = Object.keys(filter);
  const ratingsTotal = Object.values(meta.ratings).reduce((acc, curr) => acc + Number(curr), 0);
  const ratingsBreakdown = [1, 2, 3, 4, 5].map((x) => (meta.ratings[x] || 0) / ratingsTotal);

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
          <ButtonLink onClick={() => setFilter({})} type="button">Remove all filters</ButtonLink>
        </div>
        )
      }
      <LinkContainer>
        {/* a lot of repeated code, can be refactored */}
        <RatingContainer>
          <ButtonLink value={5} onClick={updateFilter} type="button">5 stars</ButtonLink>
          <ProgressBorder><ProgressBar style={{ width: `${ratingsBreakdown[5 - 1] * 100}%` }} /></ProgressBorder>
        </RatingContainer>
        <RatingContainer>
          <ButtonLink value={4} onClick={updateFilter} type="button">4 stars</ButtonLink>
          <ProgressBorder><ProgressBar style={{ width: `${ratingsBreakdown[4 - 1] * 100}%` }} /></ProgressBorder>
        </RatingContainer>
        <RatingContainer>
          <ButtonLink value={3} onClick={updateFilter} type="button">3 stars</ButtonLink>
          <ProgressBorder><ProgressBar style={{ width: `${ratingsBreakdown[3 - 1] * 100}%` }} /></ProgressBorder>
        </RatingContainer>
        <RatingContainer>
          <ButtonLink value={2} onClick={updateFilter} type="button">2 stars</ButtonLink>
          <ProgressBorder><ProgressBar style={{ width: `${ratingsBreakdown[2 - 1] * 100}%` }} /></ProgressBorder>
        </RatingContainer>
        <RatingContainer>
          <ButtonLink value={1} onClick={updateFilter} type="button">1 stars</ButtonLink>
          <ProgressBorder><ProgressBar style={{ width: `${ratingsBreakdown[1 - 1] * 100}%` }} /></ProgressBorder>
        </RatingContainer>
      </LinkContainer>
      {
        Object.keys(meta.characteristics).map((char) => (
          <div>
            {char}
            <CharBorder><CharMarker style={{ left: `${(meta.characteristics[char].value / 5) * 100}%` }} /></CharBorder>
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
