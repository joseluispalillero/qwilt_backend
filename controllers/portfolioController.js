const { OK, INTERNAL_SERVER_ERROR } = require('http-status-codes');
const Portfolio = require('../models/Portfolio');
const Property = require('../models/Property');
const User = require('../models/User');

exports.createPortfolio = (req, res) => {
  Portfolio.create({ ...req.body })
    .then((portfolio) => res.status(OK).json({ Portfolio: portfolio }))
    .catch((err) => res.status(INTERNAL_SERVER_ERROR).json({ err }));
};

exports.getAllPortfolios = (req, res) => {
  Portfolio.find().lean()
    .then(async (Portfolios) => {
      Portfolios = await Promise.all( Portfolios.map( async (item) =>  {
        const owner = await User.findById(item.owner);
        return {...item,
          owner: `${owner.firstName} ${owner.lastName}`,
          counterProperties: await Property.count({portfolioId: item._id})}
      }))
      res.status(OK).json({ Portfolios });
    })
    .catch((err) => {
      console.log(err)
      res.status(INTERNAL_SERVER_ERROR).json({ err })
    });
};

exports.getOnePortfolio = (req, res) => {
  const { id } = req.params;
  Portfolio.findById(id).lean()
    .then((portfolio) => res.status(OK).json({ Portfolio: portfolio }))
    .catch((err) => res.status(INTERNAL_SERVER_ERROR).json({ err }));
};

exports.updatePortfolio = (req, res) => {
  const { id } = req.params;
  Portfolio.findByIdAndUpdate(id, { ...req.body }, { new: true })
    .then((portfolio) => res.status(OK).json({ Portfolio: portfolio }))
    .catch((err) => res.status(INTERNAL_SERVER_ERROR).json({ err }));
};

exports.deletePortfolio = (req, res) => {
  const { id } = req.params;
  Portfolio.findByIdAndDelete(id)
    .then((portfolio) => res.status(OK).json({ Portfolio: portfolio }))
    .catch((err) => res.status(INTERNAL_SERVER_ERROR).json({ err }));
};
