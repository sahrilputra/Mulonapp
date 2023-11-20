const mongoose = require('mongoose');
// const autoIncrement = require("mongodb-autoincrement");

const MulonSchema = new mongoose.Schema({
    Createpoints: [
        {
            username: {
                type: String,
            },
            total: {
                type: Number,
            },
            createhistory: {
                type: String,
            },
        },
    ],
    trashHistory: [
        {
            serviceType: { type: String, default: "" },
            collectionDate: { type: Date, default: Date.now },
            trashType: { type: String },
            weight: { type: Number },
            price: { type: Number },
            location: { type: String, default: "" }, // Alamat atau koordinat geografis
        },
    ],

}, {
    timestamps: true
});

// userSchema.plugin(autoIncrement.mongoosePlugin);
const User = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = User;