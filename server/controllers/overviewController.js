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
      .then((response) => (response.data))
      .then((data) => {
        res.send(data);
      })
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
      .then((response) => response.data)
      .then((data) => formatStyles(data))
      .then((formattedData) => {
        res.send(formattedData);
      })
      .catch((err) => {
        console.log('error getting styles', err);
        res.sendStatus(500);
      });
  },

  postToCart: (req, res) => {
    const { sku } = req.params;

    function addToCart() {
      return axios({
        url: '/cart',
        method: 'post',
        baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products',
        data: { sku },
        headers: {
          Authorization: process.env.TOKEN,
        },
      });
    }

    function retrieveProductsInCart() {
      axios({
        url: '/cart',
        method: 'get',
        baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products',
        headers: {
          Authorization: process.env.TOKEN,
        },
      });
    }

    Promise.all([addToCart(), retrieveProductsInCart()])
      .then((results) => {
        const added = results[0];
        const retrieved = results[1];
        console.log('product added to cart: ', added);
        res.send(retrieved);
      })
      .catch((error) => console.log('error posting to cart', error));
  },
};
