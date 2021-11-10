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

export const postQuestion = (newQuestion) => {
  fetch('http://localhost:3000/qa/questions/', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newQuestion),
  })
    // .then((response) => response.json())
    .then((data) => console.log('success', data))
    .catch((err) => console.log('what is POST err', err));
};

export const postAnswer = (newAnswer, questionID) => {
  fetch(`http://localhost:3000/qa/questions/${questionID}/answers`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newAnswer),
  })
    .then((data) => console.log('newAnswer added to server', data))
    .catch((err) => console.log('what is post answer err', err));
};

export const updQuestionHelpfulness = (questionID) => {
  fetch(`http://localhost:3000/qa/questions/${questionID}/helpful`, {
    method: 'put',
  }).then((data) => console.log('updated Q helpfulness!!!', data))
    .catch((err) => console.log('what is updated Q helpfulness ERR', err));
};

export const reportQuestion = (questionID) => {
  fetch(`http://localhost:3000/qa/questions/${questionID}/report`, {
    method: 'put',
  }).then((data) => console.log('updated Q helpfulness!!!', data))
    .catch((err) => console.log('what is updated Q helpfulness ERR', err));
};
export const updAnswerHelpfulness = (answerID) => {
  fetch(`http://localhost:3000/qa/answers/${answerID}/helpful`, {
    method: 'put',
  }).then((data) => console.log('updated Q helpfulness!!!', data))
    .catch((err) => console.log('what is updated Q helpfulness ERR', err));
};
