const Lease = require('../models/Lease')
const Contact = require('../models/Contact')
const Property = require('../models/Property')

exports.createLease = (req, res, next) => {

    Lease.create({...req.body })
        .then(async Lease =>{
            await Contact.findByIdAndUpdate(Lease.contactId, {type: 'Tenant'}, { new: true })
            await Property.findByIdAndUpdate(Lease.propertyId, {status: 'Rented', currentRent: Lease.rentalRate}, { new: true })
            res.status(200).json({ Lease })
        })
        .catch(err => res.status(500).json({ err }))
}

exports.getAllLeases = (req, res, next) => {
    Lease.find()
        .then(Leases => res.status(200).json({ Leases }))
        .catch(err => res.status(500).json({ err }))
}

exports.getOneLease = (req, res, next) => {
    const { id } = req.params
    Lease.findById(id)
        .then(Lease => res.status(200).json({ Lease }))
        .catch(err => res.status(500).json({ err }))
}

exports.updateLease = (req, res, next) => {
    const { id } = req.params
    Lease.findByIdAndUpdate(id, {...req.body }, { new: true })
        .then(async Lease => {
            await Contact.findByIdAndUpdate(Lease.contactId, {type: 'Tenant'}, { new: true })
            await Property.findByIdAndUpdate(Lease.propertyId, {status: 'Rented', currentRent: Lease.rentalRate}, { new: true })
            res.status(200).json({ Lease })
        })
        .catch(err => res.status(500).json({ err }))
}

exports.deleteLease = (req, res, next) => {
    const { id } = req.params
    Lease.findByIdAndDelete(id)
        .then(Lease => res.status(200).json({ Lease }))
        .catch(err => res.status(500).json({ err }))
}

exports.getAllLeases = (req, res, next) => {
    Lease.find()
        .then(Leases => res.status(200).json({ Leases }))
        .catch(err => res.status(500).json({ err }))
}