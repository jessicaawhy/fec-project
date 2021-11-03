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

module.exports = { sortReviews };
