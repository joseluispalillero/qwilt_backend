const Contact = require('../models/Contact');

exports.createContact = (req, res, next) => {
  Contact.create({ ...req.body })
    .then((Contact) => res.status(200).json({ Contact }))
    .catch((err) => res.status(500).json({ err }));
};

exports.getAllContacts = (req, res, next) => {
  Contact.find()
    .then((Contacts) => res.status(200).json({ Contacts }))
    .catch((err) => res.status(500).json({ err }));
};

exports.getOneContact = (req, res, next) => {
  const { id } = req.params;
  Contact.findById(id)
    .then((Contact) => res.status(200).json({ Contact }))
    .catch((err) => res.status(500).json({ err }));
};

exports.updateContact = (req, res, next) => {
  const { id } = req.params;
  Contact.findByIdAndUpdate(id, { ...req.body }, { new: true })
    .then((Contact) => res.status(200).json({ Contact }))
    .catch((err) => res.status(500).json({ err }));
};

exports.deleteContact = (req, res, next) => {
  const { id } = req.params;
  Contact.findByIdAndDelete(id)
    .then((Contact) => res.status(200).json({ Contact }))
    .catch((err) => res.status(500).json({ err }));
};

exports.getTypeContacts = (req, res, next) => {
  Contact.find({ type: 'Interested', type: 'Tenant' })
    .then((Contact) => res.status(200).json({ Contact }))
    .catch((err) => res.status(500).json({ err }));
};
