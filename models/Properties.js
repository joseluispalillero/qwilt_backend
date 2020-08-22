const { Schema, model } = require('mongoose');

const propertieSchema = new Schema({
    location: String,
    description: String,
    features: [String],
    type: { type: String, enum: ['hdtvs', 'accesories', 'computers', 'audio', 'smartphones'] },
    price: Number,
    services: String,
    photos: [String],
    info: String,
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Propertie', propertieSchema);