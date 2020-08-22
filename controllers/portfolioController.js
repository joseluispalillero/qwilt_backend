const Portfolio = require('../models/Portfolio')

exports.createPortfolio = (req, res, next) => {

    Portfolio.create({...req.body })
        .then(Portfolio => res.status(200).json({ Portfolio }))
        .catch(err => res.status(500).json({ err }))
}

exports.getAllPortfolios = (req, res, next) => {
    Portfolio.find()
        .then(Portfolios => res.status(200).json({ Portfolios }))
        .catch(err => res.status(500).json({ err }))
}

exports.getOnePortfolio = (req, res, next) => {
    const { id } = req.params
    Portfolio.findById(id)
        .then(Portfolio => res.status(200).json({ Portfolio }))
        .catch(err => res.status(500).json({ err }))
}

exports.updatePortfolio = (req, res, next) => {
    const { id } = req.params
    Portfolio.findByIdAndUpdate(id, {...req.body }, { new: true })
        .then(Portfolio => res.status(200).json({ Portfolio }))
        .catch(err => res.status(500).json({ err }))
}

exports.deletePortfolio = (req, res, next) => {
    const { id } = req.params
    Portfolio.findByIdAndDelete(id)
        .then(Portfolio => res.status(200).json({ Portfolio }))
        .catch(err => res.status(500).json({ err }))
}