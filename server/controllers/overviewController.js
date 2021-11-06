const axios = require('axios');
const { formatStyles } = require('../helpers/dataTransforms');

module.exports = {
  getProductById: (req, res) => {
    axios({
      url: `/${id}`,
      method: 'get',
      baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products',
      headers: {
        Authorization: process.env.TOKEN,
      },
    })
      .then((response) => (response.data))
      .then((data) => (formatStyles(data)))
      .catch((err) => {
        console.log('error getting product by ID', err);
        res.send(500);
      });
  },

  getProductStyles: (req, res) => {
    axios({
      url: `/${id}/styles`,
      method: 'post',
      baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products',
      headers: {
        Authorization: process.env.TOKEN,
      },
    })
      .then((response) => (response.data))
      .then((data) => res.send(data))
      .cath((err) => {
        console.log('error getting styles', err);
        res.send(500);
      });
  },
};
