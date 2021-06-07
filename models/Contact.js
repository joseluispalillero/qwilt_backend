const { Schema, model } = require('mongoose');

const contactSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    type: {
        type: String,
        enum: ['Tenant', 'Landlord', 'Property Manager', 'Interested'],
        default: 'Landlord'
    },
    propertyId: {
        type: Schema.Types.ObjectId,
        ref: "Property"
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Contact', contactSchema);
