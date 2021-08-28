const { Schema, model } = require('mongoose');

const portfolioSchema = new Schema({
  nickname: String,
  capacityRatio: String,
  docs: [String],
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
}, {
  timestamps: true,
  versionKey: false,
});

module.exports = model('Portfolio', portfolioSchema);
