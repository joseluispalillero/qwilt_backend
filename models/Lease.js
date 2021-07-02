const { Schema, model } = require('mongoose');

const leaseSchema = new Schema({
    name: String,
    status: String,
    startDate: Date,
    endDate: Date,
    rentalRate: Number,
    docs: [String],
    contactId: {
        type: Schema.Types.ObjectId,
        ref: "Contact"
    },
    propertyId: {
        type: Schema.Types.ObjectId,
        ref: "Property"
    },
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Lease', leaseSchema);
