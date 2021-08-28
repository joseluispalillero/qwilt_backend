const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const userSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String,
  address: String,
  phone: Number,
  mobile: Number,
  img: String,
  role: {
    type: String,
    enum: ['ADMIN'],
    default: 'ADMIN',
  },
}, {
  timestamps: true,
  versionKey: false,
});

userSchema.plugin(PLM, { usernameField: 'email' });
module.exports = model('User', userSchema);
