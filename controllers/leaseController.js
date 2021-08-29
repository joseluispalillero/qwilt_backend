const { OK, INTERNAL_SERVER_ERROR } = require('http-status-codes');
const Lease = require('../models/Lease');
const Contact = require('../models/Contact');
const Property = require('../models/Property');

const days = (1000 * 3600 * 24);
const year = 365;

exports.createLease = (req, res) => {
  Lease.create({ ...req.body })
    .then(async (lease) => {
      await Contact.findByIdAndUpdate(lease.contactId, { type: 'Tenant' }, { new: true });
      const differenceInTime = lease.endDate.getTime() - lease.startDate.getTime();
      const differenceInDays = differenceInTime / days;
      await Property.findByIdAndUpdate(lease.propertyId, {
        status: 'Rented',
        capacityRatio: differenceInDays / year,
        currentRent: lease.rentalRate,
      }, { new: true });
      res.status(OK).json({ Lease: lease });
    })
    .catch((err) => res.status(INTERNAL_SERVER_ERROR).json({ err }));
};

exports.getAllLeases = (req, res) => {
  Lease.find().lean()
    .then((Leases) => res.status(OK).json({ Leases }))
    .catch((err) => res.status(INTERNAL_SERVER_ERROR).json({ err }));
};

exports.getOneLease = (req, res) => {
  const { id } = req.params;
  Lease.findById(id).lean()
    .then((lease) => res.status(OK).json({ Lease: lease }))
    .catch((err) => res.status(INTERNAL_SERVER_ERROR).json({ err }));
};

exports.updateLease = (req, res) => {
  const { id } = req.params;
  Lease.findByIdAndUpdate(id, { ...req.body }, { new: true })
    .then(async (lease) => {
      await Contact.findByIdAndUpdate(lease.contactId, { type: 'Tenant' }, { new: true });
      const differenceInTime = lease.endDate.getTime() - lease.startDate.getTime();
      const differenceInDays = differenceInTime / days;
      await Property.findByIdAndUpdate(lease.propertyId, {
        status: 'Rented',
        capacityRatio: differenceInDays / year,
        currentRent: lease.rentalRate,
      }, { new: true });
      res.status(OK).json({ Lease: lease });
    })
    .catch((err) => res.status(INTERNAL_SERVER_ERROR).json({ err }));
};

exports.deleteLease = async (req, res) => {
  const { id } = req.params;
  const lease = await Lease.findById(id);
  await Property.findByIdAndUpdate(lease.propertyId, {
    status: 'Available',
    capacityRatio: 0,
    currentRent: 0,
  }, { new: true });
  Lease.findByIdAndDelete(id)
    .then((leaseData) => res.status(OK).json({ Lease: leaseData }))
    .catch((err) => res.status(INTERNAL_SERVER_ERROR).json({ err }));
};

exports.getAllLeases = (req, res) => {
  Lease.find().lean()
    .then((Leases) => res.status(OK).json({ Leases }))
    .catch((err) => res.status(INTERNAL_SERVER_ERROR).json({ err }));
};
