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
    .then((response) => response.data)
    .then((data) => res.send(data))
    .catch((err) => {
      console.log('---------', err.request);
      res.status(500).send(err);
    });
};

module.exports = {
  getQuestions,
};
