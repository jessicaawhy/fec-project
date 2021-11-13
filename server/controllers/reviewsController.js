/* eslint-disable camelcase */
const axios = require('axios');

axios.defaults.headers.common.Authorization = process.env.TOKEN;

const instance = axios.create({
  baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/',
});

exports.review_get = (req, res) => {
  const {
    product_id, page, count, sort,
  } = req.params;

  instance({
    url: '/',
    method: 'get',
    params: {
      product_id, page, count, sort,
    },
  })
    .then((response) => res.send(response.data))
    .catch(() => res.sendStatus(500));
};

exports.review_get_meta = (req, res) => {
  const { product_id } = req.params;

  instance({
    url: '/meta',
    method: 'get',
    params: {
      product_id,
    },
  })
    .then((response) => res.send(response.data))
    .catch(() => res.sendStatus(500));
};

exports.review_mark_helpful = (req, res) => {
  const { review_id } = req.params;

  instance({
    url: `${review_id}/helpful/`,
    method: 'put',
  })
    .then(() => res.sendStatus(204))
    .catch(() => res.sendStatus(500));
};

exports.review_report = (req, res) => {
  const { review_id } = req.params;

  instance({
    url: `${review_id}/report/`,
    method: 'put',
  })
    .then(() => res.sendStatus(204))
    .catch(() => res.sendStatus(500));
};

exports.review_create = (req, res) => {
  const { body } = req;

  instance({
    url: '/',
    method: 'post',
    data: body,
  })
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
};
