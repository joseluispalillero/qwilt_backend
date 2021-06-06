const { Schema, model } = require('mongoose');

const propertieSchema = new Schema({
    location: String,
    name: String,
    description: String,
    targetRent: Number,
    currentRent: Number,
    photos: [String],
    portfolioId: {
        type: Schema.Types.ObjectId,
        ref: "Portfolio"
    },
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Properties', propertieSchema);
