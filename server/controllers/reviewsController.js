/* eslint-disable camelcase */
const axios = require('axios');

exports.review_get = (req, res) => {
  const {
    product_id, page, count, sort,
  } = req.params;

  const config = {
    headers: { Authorization: process.env.TOKEN },
  };

  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/?${new URLSearchParams({
    product_id,
    page,
    count,
    sort,
  })}`, config)
    .then((response) => response.data)
    .then((data) => res.send(data));
};

exports.review_get_meta = (req, res) => {
  const { product_id } = req.params;

  const config = {
    headers: { Authorization: process.env.TOKEN },
  };

  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/meta/?${new URLSearchParams({
    product_id,
  })}`, config)
    .then((response) => response.data)
    .then((data) => res.send(data));
};
