const Property = require('../models/Property')

exports.createProperty = (req, res, next) => {

    Property.create({...req.body })
        .then(Property => res.status(200).json({ Property }))
        .catch(err => res.status(500).json({ err }))
}

exports.getAllProperties = (req, res, next) => {
    Property.find()
        .then(Properties => res.status(200).json({ Properties}))
        .catch(err => res.status(500).json({ err }))
}

exports.getOneProperty = (req, res, next) => {
    const { id } = req.params
    Property.findById(id)
        .then(Property => res.status(200).json({ Property }))
        .catch(err => res.status(500).json({ err }))
}

exports.updateProperty = (req, res, next) => {
    const { id } = req.params
    Property.findByIdAndUpdate(id, {...req.body }, { new: true })
        .then(Property => res.status(200).json({ Property }))
        .catch(err => res.status(500).json({ err }))
}

exports.deleteProperty = (req, res, next) => {
    const { id } = req.params
    Property.findByIdAndDelete(id)
        .then(Property => res.status(200).json({ Property }))
        .catch(err => res.status(500).json({ err }))
}

exports.getStatusProperty = (req, res, next) => {
    Property.find({status : 'Available'})
        .then(Properties => res.status(200).json({ Properties }))
        .catch(err => res.status(500).json({ err }))
}