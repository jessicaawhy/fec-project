const axios = require('axios');

axios.defaults.baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions';
axios.defaults.headers.common.Authorization = process.env.TOKEN;
// apply default header

const getQuestions = (req, res) => {
  const { product_id, page, count } = req.params;
  console.log(req.url);
  axios({
    method: 'get',
    url: `/?${new URLSearchParams({ product_id, page, count })}`,
    // url: `/?product_id=${product_id}&page=${page}&count=${count}`,
  })
    .then((response) => response.data)
    .then((data) => res.send(data))
    .catch((err) => {
      console.log('---------', err.request);
      res.send(500);
    });
};

module.exports = {
  getQuestions,
};
/** TO BE DELETED */
// ?product_id=61575&page=1&count=5
// url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/?${new URLSearchParams({
//   product_id,
//   page,
//   count,
// })}`,
// headers: { Authorization: process.env.TOKEN },
