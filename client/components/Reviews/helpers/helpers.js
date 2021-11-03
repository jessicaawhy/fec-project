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

module.exports = { sortReviews, getAverageRating, getAverageRec };
