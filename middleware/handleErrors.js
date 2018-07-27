const app = require('express')();

const handleErrors = (err, req, res, next) => {
  switch (err.code) {
    case 500:
      res.status(500).json({ message: err.message });
    case 400:
      res.status(400).json({ message: err.message });
    default:
      next();
  }
};

module.exports = handleErrors;
