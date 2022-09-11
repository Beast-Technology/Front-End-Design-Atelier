const axios = require('axios');

const { API_URL, TOKEN } = process.env;
axios.defaults.baseURL = API_URL;
axios.defaults.headers.common.Authorization = TOKEN;

module.exports = {
  overview: (req, res) => {
    axios.get(req.originalUrl)
      .then((response) => {
        res.send(response.data);
      })
      .catch((err) => {
        res.send(err);
      });
  },
  products: (req, res) => {
    axios.get(req.originalUrl)
      .then((response) => {
        res.send(response.data);
      })
      .catch((err) => {
        res.send(err);
      });
  },
  styles: (req, res) => {
    axios.get(req.originalUrl)
      .then((response) => {
        res.send(response.data);
      })
      .catch((err) => {
        res.send(err);
      });
  },
};
