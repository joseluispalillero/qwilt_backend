const Financial = require('../models/Financial');

exports.createFinancial = (req, res, next) => {
  Financial.create({ ...req.body })
    .then((Financial) => res.status(200).json({ Financial }))
    .catch((err) => res.status(500).json({ err }));
};

exports.getAllFinancials = (req, res, next) => {
  Financial.find()
    .then((Financials) => res.status(200).json({ Financials }))
    .catch((err) => res.status(500).json({ err }));
};

exports.getOneFinancial = (req, res, next) => {
  const { id } = req.params;
  Financial.findById(id)
    .then((Financial) => res.status(200).json({ Financial }))
    .catch((err) => res.status(500).json({ err }));
};

exports.updateFinancial = (req, res, next) => {
  const { id } = req.params;
  Financial.findByIdAndUpdate(id, { ...req.body }, { new: true })
    .then((Financial) => res.status(200).json({ Financial }))
    .catch((err) => res.status(500).json({ err }));
};

exports.deleteFinancial = (req, res, next) => {
  const { id } = req.params;
  Financial.findByIdAndDelete(id)
    .then((Financial) => res.status(200).json({ Financial }))
    .catch((err) => res.status(500).json({ err }));
};
