export const getAverageRating = (ratings) => {
  let total = 0;
  let count = 0;

  for (let i = 0; i < 6; i += 1) {
    if (ratings[i]) {
      const currentCount = Number(ratings[i]);
      count += currentCount;
      total += currentCount * i;
    }
  }

  if (total === 0) {
    return 0;
  }

  return total / count;
};

export const getRatingBreakdown = (ratings) => {
  const ratingsTotal = Object.values(ratings)
    .reduce((acc, curr) => acc + Number(curr), 0);

  if (ratingsTotal === 0) {
    return [0, 0, 0, 0, 0];
  }

  return [1, 2, 3, 4, 5].map((x) => (ratings[x] || 0) / ratingsTotal);
};

export const getAverageRec = (recommended) => {
  const trueCount = recommended.true ? Number(recommended.true) : 0;
  const falseCount = recommended.false ? Number(recommended.false) : 0;

  if (trueCount + falseCount === 0) {
    return '0';
  }

  return trueCount / (trueCount + falseCount);
};

export const formatDate = (date) => (
  new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
);

export const getData = async (productID, page, num, sortOption) => {
  const response = await fetch(`http://localhost:3000/reviews/${productID}/${page}/${num}/${sortOption}`);
  const data = await response.json();

  return data;
};

export const getMetaData = async (productID) => {
  const response = await fetch(`http://localhost:3000/reviews/meta/${productID}/`);
  const data = await response.json();

  return data;
};
