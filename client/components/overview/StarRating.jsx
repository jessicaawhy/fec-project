import React from 'react';
import styled from 'styled-components';
import Star from './Star';

const StarRating = () => (
  <div data-testid="starRating">
    <StarRatingStyle>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
      {/* change href="#starRating" to reference Reviews module */}
      <a href="#starRating">Read All Reviews</a>
    </StarRatingStyle>
  </div>
);

export default StarRating;

const StarRatingStyle = styled.div`
  display: flex;
  flex-direction: row
`;
