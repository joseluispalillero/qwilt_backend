const { Schema, model } = require('mongoose');

const contactSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    type: String,
    propertieId: {
        type: Schema.Types.ObjectId,
        ref: "Propertie"
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