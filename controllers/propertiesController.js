const Propertie = require('../models/Properties')

exports.createPropertie = (req, res, next) => {

    Propertie.create({...req.body })
        .then(Propertie => res.status(200).json({ Propertie }))
        .catch(err => res.status(500).json({ err }))
}

exports.getAllProperties = (req, res, next) => {
    Propertie.find()
        .then(Properties => res.status(200).json({ Properties }))
        .catch(err => res.status(500).json({ err }))
}

exports.getOnePropertie = (req, res, next) => {
    const { id } = req.params
    Propertie.findById(id)
        .then(Propertie => res.status(200).json({ Propertie }))
        .catch(err => res.status(500).json({ err }))
}

exports.updatePropertie = (req, res, next) => {
    const { id } = req.params
    Propertie.findByIdAndUpdate(id, {...req.body }, { new: true })
        .then(Propertie => res.status(200).json({ Propertie }))
        .catch(err => res.status(500).json({ err }))
}

exports.deletePropertie = (req, res, next) => {
    const { id } = req.params
    Propertie.findByIdAndDelete(id)
        .then(Propertie => res.status(200).json({ Propertie }))
        .catch(err => res.status(500).json({ err }))
}