const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Masukan Username"],
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },

    email: {
        type: String,
        required: [true, "Masukan Email Anda"],
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, "Masukan Password"],
        minlength: [6, "Password harus memiliki minimal 6 karakter"],
    },
    role: {
        type: String,
        default: "IAM",
    },
    team: {
        type: String,
        default: "unallocated",
    },
    avatar: {
        type: String,
        default: "https://i.pravatar.cc/150",
    },
    phone: {
        type: Number,
    },
    socialMedia: {
        linkedIn: {
            type: String,
        },
        instagram: {
            type: String,
        },
        facebook: {
            type: String,
        }
    },

    history: {
        type: [{ action: String, timestamp: { type: Date, default: Date.now } }],
        default: [],
    },
},
    {
        timestamps: true
    });



const Admin = mongoose.models.Admin || mongoose.model('Admin', adminSchema);

module.exports = Admin;