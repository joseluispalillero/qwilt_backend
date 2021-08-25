const Lease = require('../models/Lease')
const Contact = require('../models/Contact')
const Property = require('../models/Property')

exports.createLease = (req, res, next) => {
    Lease.create({...req.body })
        .then(async Lease =>{
            await Contact.findByIdAndUpdate(Lease.contactId, {type: 'Tenant'}, { new: true })
            const difference_In_Time = Lease.endDate.getTime() - Lease.startDate.getTime()
            const difference_In_Days = difference_In_Time / (1000 * 3600 * 24)
            await Property.findByIdAndUpdate(Lease.propertyId, {
                status: 'Rented',
                capacityRatio: difference_In_Days / 365,
                currentRent: Lease.rentalRate}, { new: true })
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
            const difference_In_Time = Lease.endDate.getTime() - Lease.startDate.getTime()
            const difference_In_Days = difference_In_Time / (1000 * 3600 * 24)
            await Property.findByIdAndUpdate(Lease.propertyId, {status: 'Rented',
                capacityRatio: difference_In_Days / 365,
                currentRent: Lease.rentalRate}, { new: true })
            res.status(200).json({ Lease })
        })
        .catch(err => res.status(500).json({ err }))
}

exports.deleteLease = async (req, res, next) => {
    const { id } = req.params
    const lease = await Lease.findById(id)
    console.log("lease")
    await Property.findByIdAndUpdate(lease.propertyId, {
        status: 'Available',
        capacityRatio: 0,
        currentRent:0}, { new: true })
    Lease.findByIdAndDelete(id)
        .then(Lease => res.status(200).json({ Lease }))
        .catch(err => res.status(500).json({ err }))
}

exports.getAllLeases = (req, res, next) => {
    Lease.find()
        .then(Leases => res.status(200).json({ Leases }))
        .catch(err => res.status(500).json({ err }))
}
