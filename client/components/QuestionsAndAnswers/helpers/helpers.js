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

// export const postQuestion = async (product_id, body, name, email) => {
//   const newQuestion = {
//     product_id, body, name, email,
//   };
//   const response = await fetch('http://localhost:3000/qa/questions/', {
//     method: 'post',
//     header: {
//       'Content-Type': 'application/json',
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     body: JSON.stringify(newQuestion),
//   });
//   console.log('----PostQuestion', response);
//   // // return response.json();
//   const data = await response.json();
//   console.log('what is data postQuestion', data);
//   // return data;
// };

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
