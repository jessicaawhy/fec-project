export const getQuestions = async (productID, page, count) => {
  const response = await fetch(`/qa/questions/${productID}/${page}/${count}`);
  const data = await response.json();
  return data;
};

export const getAnswers = async (questionID, page, count) => {
  const response = await fetch(`/qa/questions/${questionID}/answers/${page}/${count}`);
  const data = await response.json();
  return data;
};

export const postQuestion = (newQuestion) => {
  fetch('/qa/questions/', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newQuestion),
  })
    .then(() => true)
    .catch((err) => console.log('what is POST err', err));
};

export const postAnswer = (newAnswer, questionID) => {
  fetch(`/qa/questions/${questionID}/answers`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newAnswer),
  })
    .then(() => true)
    .catch((err) => console.log('what is post answer err', err));
};

export const updQuestionHelpfulness = (questionID) => {
  fetch(`/qa/questions/${questionID}/helpful`, {
    method: 'put',
  }).then(() => true)
    .catch((err) => console.log('what is updated Q helpfulness ERR', err));
};

export const reportQuestion = (questionID) => {
  fetch(`/qa/questions/${questionID}/report`, {
    method: 'put',
  }).then(() => true)
    .catch((err) => console.log('what is updated Q helpfulness ERR', err));
};
export const updAnswerHelpfulness = (answerID) => {
  fetch(`/qa/answers/${answerID}/helpful`, {
    method: 'put',
  }).then(() => true)
    .catch((err) => console.log('what is updated Q helpfulness ERR', err));
};

export const formatDate = (newDate) => new Date(newDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
