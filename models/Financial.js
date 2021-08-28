const { Schema, model } = require('mongoose');

const financialSchema = new Schema({
  name: String,
  lastName: String,
  bankAccount: String,
  connection: String,

}, {
  timestamps: true,
  versionKey: false,
});

module.exports = model('Propertie', financialSchema);
