const { Schema, model } = require('mongoose');

const propertySchema = new Schema({
    location: String,
    name: String,
    description: String,
    targetRent: Number,
    currentRent: Number,
    status: {
        type: String,
        enum: ['Rented', 'Available'],
        default: 'Available',
    },
    photos: [String],
    portfolioId: {
        type: Schema.Types.ObjectId,
        ref: "Portfolio"
    },
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Properties', propertySchema);
