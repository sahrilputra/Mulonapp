const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        maxlength: 20,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    role: {
        type: String,
        enum: ['admin', 'user', 'driver'],
        required: true,
    },
    fullName: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    address: {
        type: String,
    },
    // Atribut tambahan sesuai kebutuhan
    isDriver: {
        type: Boolean,
        default: false,
        // Menandakan apakah pengguna adalah driver
    },
    driverInfo: {
        // Informasi tambahan untuk driver
        licenseNumber: {
            type: String,
            // Nomor lisensi pengemudi
        },
        vehicleType: {
            type: String,
            // Jenis kendaraan yang digunakan
        },
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;