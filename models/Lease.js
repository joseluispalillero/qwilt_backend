const { Schema, model } = require('mongoose');

const leaseSchema = new Schema({
    status: String,
    startDate: Date,
    endDate: Date,
    contactId: {
        type: Schema.Types.ObjectId,
        ref: "Contact"
    },
    propertieId: {
        type: Schema.Types.ObjectId,
        ref: "Property"
    },
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Lease', leaseSchema);
