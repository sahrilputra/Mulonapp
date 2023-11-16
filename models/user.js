const mongoose = require('mongoose');

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
    role: {
        type: String,
        default: "user",
    },
    username: {
        type: String,
    },
    phoneNumber: {
        type: Number,
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
            trashType: { type: String, required: true },
            weight: { type: Number, required: true },
            price: { type: Number, required: true },
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
    timeStamps: true,
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = User;