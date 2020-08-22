const { Schema, model } = require('mongoose');

const portfolioSchema = new Schema({
    bankAccount: String,
    legalDocs: [String],
    contactId: {
        type: Schema.Types.ObjectId,
        ref: "Contact"
    },
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Portfolio', portfolioSchema);