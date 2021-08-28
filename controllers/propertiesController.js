const { OK, INTERNAL_SERVER_ERROR } = require('http-status-codes');
const Property = require('../models/Property');

exports.createProperty = (req, res) => {
  Property.create({ ...req.body })
    .then((property) => res.status(OK).json({ Property: property }))
    .catch((err) => res.status(INTERNAL_SERVER_ERROR).json({ err }));
};

exports.getAllProperties = (req, res) => {
  Property.find().lean()
    .then((Properties) => res.status(OK).json({ Properties }))
    .catch((err) => res.status(INTERNAL_SERVER_ERROR).json({ err }));
};

exports.getOneProperty = (req, res) => {
  const { id } = req.params;
  Property.findById(id).lean()
    .then((property) => res.status(OK).json({ Property: property }))
    .catch((err) => res.status(INTERNAL_SERVER_ERROR).json({ err }));
};

exports.updateProperty = (req, res) => {
  const { id } = req.params;
  Property.findByIdAndUpdate(id, { ...req.body }, { new: true })
    .then((property) => res.status(OK).json({ Property: property }))
    .catch((err) => res.status(INTERNAL_SERVER_ERROR).json({ err }));
};

exports.deleteProperty = (req, res) => {
  const { id } = req.params;
  Property.findByIdAndDelete(id)
    .then((property) => res.status(OK).json({ Property: property }))
    .catch((err) => res.status(INTERNAL_SERVER_ERROR).json({ err }));
};

exports.getStatusProperty = (req, res) => {
  Property.find({ status: 'Available' }).lean()
    .then((Properties) => res.status(OK).json({ Properties }))
    .catch((err) => res.status(INTERNAL_SERVER_ERROR).json({ err }));
};
