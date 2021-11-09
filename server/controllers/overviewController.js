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
    console.log('req.body', req.body);
    const { body } = req;

    // axios({
    //   url: '/cart',
    //   method: 'post',
    //   body,
    //   baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: process.env.TOKEN,
    //   },
    // })
    //   .then((response) => {
    //     console.log('response.data: ', response.data);
    //     return response.data;
    //   })
    //   .then((data) => {
    //     axios({
    //       url: '/cart',
    //       method: 'get',
    //       body,
    //       baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products',
    //       headers: {
    //         'Content-Type': 'application/json',
    //         Authorization: process.env.TOKEN,
    //       },
    //     })
    //       .then((response) => response.data)
    //       .then((cart) => {
    //         console.log('cart', cart, 'data', data);
    //         res.send(cart);
    //       })
    //       .catch((error) => {
    //         console.log('error getting data after posting', error);
    //         res.sendStatus(500);
    //       });
    //   })
    //   .catch((err) => {
    //     console.log('error getting styles', err);
    //     res.sendStatus(500);
    //   });

    function addToCart() {
      return axios.post('/cart', body, {
        baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products',
        headers: {
          'Content-Type': 'application/json',
          Authorization: process.env.TOKEN,
        },
      });
    }

    function retrieveProductsInCart() {
      return axios.get('/cart', {
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
        console.log('product added to cart: ', added, 'products retrieved: ', retrieved);
        res.status(201).send(retrieved);
      })
      .catch((error) => {
        console.log('error posting to cart', error);
        res.sendStatus(500);
      });
  },

  getCart: (req, res) => {
    axios({
      url: '/cart',
      method: 'get',
      baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products',
      headers: {
        Authorization: process.env.TOKEN,
      },
    })
      .then((response) => response.data)
      .then((data) => res.send(data))
      .catch((err) => {
        console.log('error getting styles', err);
        res.sendStatus(500);
      });
  },
};
