const axios = require('axios');

module.exports = {
  getProducts: (req, res) => {
    const { page, count } = req.params;

    axios({
      url: `?${new URLSearchParams({
        page,
        count,
      })}`,
      method: 'get',
      baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products',
      headers: {
        Authorization: process.env.TOKEN,
      },
    })
      .then((response) => (response.data))
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        console.log('error getting products', err);
        res.send(500);
      });
  },
};
