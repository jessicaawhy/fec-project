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
    .then((data) => res.send(data))
    .catch(() => res.sendStatus(500));
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
    .then((data) => res.send(data))
    .catch(() => res.sendStatus(500));
};

exports.review_mark_helpful = (req, res) => {
  const { review_id } = req.params;

  const config = {
    headers: { Authorization: process.env.TOKEN },
  };

  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/${review_id}/helpful/`, config)
    .then(() => res.sendStatus(204))
    .catch(() => res.sendStatus(500));
};

exports.review_report = (req, res) => {
  const { review_id } = req.params;

  const config = {
    headers: { Authorization: process.env.TOKEN },
  };

  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/${review_id}/report/`, config)
    .then(() => res.sendStatus(204))
    .catch(() => res.sendStatus(500));
};
