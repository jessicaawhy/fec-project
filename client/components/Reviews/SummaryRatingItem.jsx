import React from 'react';
import PropTypes from 'prop-types';
import {
  RatingContainer, ButtonLink, ProgressBorder, ProgressBar,
} from './styles/SummaryRatingItem.styled';

const SummaryRatingItem = ({
  value, width, filter, setFilter,
}) => {
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
    <RatingContainer>
      <ButtonLink onClick={updateFilter} value={value} type="button">{`${value} stars`}</ButtonLink>
      <ProgressBorder><ProgressBar style={{ width: `${width}%` }} /></ProgressBorder>
    </RatingContainer>
  );
};

export default SummaryRatingItem;

SummaryRatingItem.propTypes = {
  value: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  filter: PropTypes.shape({}).isRequired,
  setFilter: PropTypes.func.isRequired,
};
