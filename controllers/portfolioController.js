const { OK, INTERNAL_SERVER_ERROR } = require('http-status-codes');
const Portfolio = require('../models/Portfolio');

exports.createPortfolio = (req, res) => {
  Portfolio.create({ ...req.body })
    .then((portfolio) => res.status(OK).json({ Portfolio: portfolio }))
    .catch((err) => res.status(INTERNAL_SERVER_ERROR).json({ err }));
};

exports.getAllPortfolios = (req, res) => {
  Portfolio.find().lean()
    .then((Portfolios) => res.status(OK).json({ Portfolios }))
    .catch((err) => res.status(INTERNAL_SERVER_ERROR).json({ err }));
};

exports.getOnePortfolio = (req, res) => {
  const { id } = req.params;
  Portfolio.findById(id).lean()
    .then((portfolio) => res.status(OK).json({ Portfolio: portfolio }))
    .catch((err) => res.status(INTERNAL_SERVER_ERROR).json({ err }));
};

exports.updatePortfolio = (req, res) => {
  const { id } = req.params;
  Portfolio.findByIdAndUpdate(id, { ...req.body }, { new: true })
    .then((portfolio) => res.status(OK).json({ Portfolio: portfolio }))
    .catch((err) => res.status(INTERNAL_SERVER_ERROR).json({ err }));
};

exports.deletePortfolio = (req, res) => {
  const { id } = req.params;
  Portfolio.findByIdAndDelete(id)
    .then((portfolio) => res.status(OK).json({ Portfolio: portfolio }))
    .catch((err) => res.status(INTERNAL_SERVER_ERROR).json({ err }));
};
