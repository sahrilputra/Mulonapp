const mongoose = require('mongoose');
// const autoIncrement = require("mongodb-autoincrement");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Masukan Nama Lengkap Anda",
        minlength: 3,
    },
    email: {
        type: String,
        required: "Masukan Email Anda",
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: "Masukan Password",
        minlength: 6,
    },
    phone: {
        type: String,
    },
    role: {
        type: String,
        default: "user",
    },
    username: {
        type: String,
    },

    avatar: {
        type: String,
        default: "https://i.pravatar.cc/150",
    },
    address: [
        {
            firstName: {
                type: String,
            },
            lastName: {
                type: String,
            },
            address1: {
                type: String,
            },
            address2: {
                type: String,
            },
            city: {
                type: String,
            },
            zipCode: {
                type: String,
            },
            state: {
                type: String,
            },
            active: {
                type: Boolean,
                default: false,
            },

        },
    ],
    pickupSchedule: { type: String },
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
    isDriver: {
        type: Boolean,
        default: false,
    },
    driverInfo: {
        licenseNumber: {
            type: String,
        },
        vehicleType: {
            type: String,
        },
    },

}, {
    timestamps: true
});

// userSchema.plugin(autoIncrement.mongoosePlugin);
const User = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = User;