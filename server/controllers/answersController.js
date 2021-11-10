const axios = require('axios');

// apply axios defaults
// axios.defaults.headers.common.Authorization = process.env.TOKEN;

const updateAnswerHelpfuless = (req, res) => {
  const { answers_id } = req.params;
  console.log('req.params is -----------', req.params);
  axios({
    method: 'put',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/answers/${answers_id}/helpful`,
    headers: { Authorization: process.env.TOKEN },
  }).then(res.status(204).send('updated'))
    .catch((err) => console.log('-----', err));
};
module.exports = updateAnswerHelpfuless;
