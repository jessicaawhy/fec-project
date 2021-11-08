// replace the product_id after read more about useContext
// const getQuestions = fetch(`http://localhost:3000/qa/questions/${prodcut_id}/${page}/${count}`)
export const getQuestions = async (productID, page, count) => {
  const response = await fetch(`http://localhost:3000/qa/questions/${productID}/${page}/${count}`);
  console.log('what is fetch resposne', response);
  const data = await response.json();
  console.log('what is data getQuestion', data);
  return data;
};

export const getAnswers = async (questionID, page, count) => {
  const response = await fetch(`http://localhost:3000/qa/questions/${questionID}/answers/${page}/${count}`);
  console.log('what is fetch fet answers', response);
  const data = await response.json();
  console.log('what is data getAnswer', data);
  return data;
};

// export default getQuestions;

// /:question_id/answers/:page/:count'

// export const getData = async (productID, page, num, sortOption) => {
//   const response = await fetch(`http://localhost:3000/reviews/${productID}/${page}/${num}/${sortOption}`);
//   const data = await response.json();

//   return data;
// };
