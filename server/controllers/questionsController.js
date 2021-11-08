const axios = require('axios');

// apply axios defaults
axios.defaults.baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions';
axios.defaults.headers.common.Authorization = process.env.TOKEN;

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
  res.send('from post question API');
  const {
    product_id, body, name, email,
  } = req.params;
  axios({
    method: 'post',
    url: '',
    data: { body, name, email },
  });
};

module.exports = {
  getQuestions,
  getAnswers,
  postQuestion,
};
