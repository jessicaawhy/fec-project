import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledCharItem, CharBorder, CharMarker, Labels,
} from './styles/SummaryCharItem.styled';

const SummaryCharItem = ({ char, percent }) => {
  const qualityDescriptor = {
    Size: ['Too Small', 'Too Large'],
    Width: ['Too Narrow', 'Too Wide'],
    Comfort: ['Uncomfortable', 'Perfect'],
    Quality: ['Poor', 'Perfect'],
    Length: ['Too Short', 'Too Long'],
    Fit: ['Too Tight', 'Too Loose'],
  };

  return (
    <StyledCharItem>
      <span>{char}</span>

      <CharBorder>
        <CharMarker style={{ left: `${percent}%` }} />
      </CharBorder>
      <Labels>
        <span>{qualityDescriptor[char][0]}</span>
        <span>{qualityDescriptor[char][1]}</span>
      </Labels>
    </StyledCharItem>
  );
};

export default SummaryCharItem;

SummaryCharItem.propTypes = {
  char: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
};
