import React from 'react';
import Star from './Star';
import StarRatingStyle from './styles/StarRating.style';

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
