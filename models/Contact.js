const { Schema, model } = require('mongoose');

const contactSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  photos: [String],
  country: String,
  state: String,
  type: {
    type: String,
    enum: ['Tenant', 'Owner', 'Property Manager', 'Interested'],
    default: 'Owner',
  },
  propertyId: {
    type: Schema.Types.ObjectId,
    ref: 'Property',
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
}, {
  timestamps: true,
  versionKey: false,
});

module.exports = model('Contact', contactSchema);
