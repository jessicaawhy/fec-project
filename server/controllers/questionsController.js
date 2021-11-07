const axios = require('axios');
// apply default header

exports.getQuestions = (req, res) => {
  console.log('------', req);
  const { product_id, page, count } = req.params;
  // const config = {
  //   headers: { Authorization: process.env.TOKEN },
  // };
  axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/?${new URLSearchParams({
      product_id,
      page,
      count,
    })}`,
    headers: { Authorization: process.env.TOKEN },
  })
    .then((response) => response.data)
    .then((data) => res.send(data))
    .catch((err) => {
      console.log('---------', err);
      res.send(500);
    });
};

// module.exports = {
//   getQuestions,
// };
