const axios = require('axios');
const { formatStyles } = require('../helpers/dataTransforms');

module.exports = {
  getProductById: (req, res) => {
    const { id } = req.params;

    axios({
      url: `/${id}`,
      method: 'get',
      baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products',
      headers: {
        Authorization: process.env.TOKEN,
      },
    })
      .then((response) => res.send(response.data))
      .catch((err) => {
        console.log('error getting product by ID', err);
        res.sendStatus(500);
      });
  },

  getProductStyles: (req, res) => {
    const { id } = req.params;

    axios({
      url: `/${id}/styles`,
      method: 'get',
      baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products',
      headers: {
        Authorization: process.env.TOKEN,
      },
    })
      .then((response) => {
        const formattedData = formatStyles(response.data);
        res.send(formattedData);
      })
      .catch((err) => {
        console.log('error getting styles', err);
        res.sendStatus(500);
      });
  },

  postToCart: (req, res) => {
    let { body } = req;
    body = JSON.stringify(req.body);

    axios({
      url: '/cart',
      method: 'post',
      data: body,
      baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo',
      headers: {
        Authorization: process.env.TOKEN,
      },
    })
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log('error posting to cart', err);
        res.sendStatus(500);
      });
  },

  getCart: (req, res) => {
    axios({
      url: '/cart',
      method: 'get',
      baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/',
      headers: {
        Authorization: process.env.TOKEN,
      },
    })
      .then((response) => res.send(response.data))
      .catch((err) => {
        console.log('error getting cart', err);
        res.sendStatus(500);
      });
  },
};
