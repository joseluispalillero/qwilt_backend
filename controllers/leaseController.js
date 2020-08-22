const Lease = require('../models/Lease')

exports.createLease = (req, res, next) => {

    Lease.create({...req.body })
        .then(Lease => res.status(200).json({ Lease }))
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
        .then(Lease => res.status(200).json({ Lease }))
        .catch(err => res.status(500).json({ err }))
}

exports.deleteLease = (req, res, next) => {
    const { id } = req.params
    Lease.findByIdAndDelete(id)
        .then(Lease => res.status(200).json({ Lease }))
        .catch(err => res.status(500).json({ err }))
}