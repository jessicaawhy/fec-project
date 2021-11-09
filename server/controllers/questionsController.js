const axios = require('axios');

// apply axios defaults
axios.defaults.baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions';
axios.defaults.headers.common.Authorization = process.env.TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/json';

const getQuestions = (req, res) => {
  const { product_id, page, count } = req.params;
  axios({
    method: 'get',
    url: `/?${new URLSearchParams({ product_id, page, count })}`,
    // url: `/?product_id=${product_id}&page=${page}&count=${count}`,
  })
    .then((response) => res.send(response.data))
    // .then((data) => res.send(data))
    .catch((err) => {
      console.log('---------', err.request);
      res.status(500).send(err);
    });
};

const getAnswers = (req, res) => {
  const { question_id, page, count } = req.params;
  axios({
    method: 'get',
    url: `/${question_id}/answers/?page=${page}&count=${count}`,
  })
    .then((response) => res.send(response.data))
    // .then((data) => res.send(data))
    .catch((err) => {
      console.log('get answers ----', err.request);
      res.status(500).send(err);
    });
};

const postQuestion = (req, res) => {
  const {
    product_id, body, name, email,
  } = req.body;
  // console.log('.....', req.body);
  axios({
    method: 'post',
    url: '/',
    data: {
      product_id, body, name, email,
    },
  }).then(res.status(201).send('thanks for posting'))
    .catch((err) => { console.log('postQUestion-----', err); });
  // res.status(500).send(err);
};

const postAnswer = (req, res) => {
  const { question_id } = req.params;
  const {
    body, name, email, photos,
  } = req.body;
  axios({
    method: 'post',
    url: `/${question_id}/answers`,
    data: {
      body, name, email, photos,
    },
  }).then((res.status(201).send('thank you for adding an answer')))
    .catch((err) => res.send(err));
};

module.exports = {
  getQuestions,
  getAnswers,
  postQuestion,
  postAnswer,
};
