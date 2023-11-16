const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    fullname: { type: String },
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
        default: "admin",
    },
    team: {
        type: String,
        default: "unallocated",
    },
    avatar: {
        type: String,
        default: "https://i.pravatar.cc/150",
    },

},
    {
        timestamps: true
    });



const Admin = mongoose.models.Admin || mongoose.model('Admin', adminSchema);

module.exports = Admin;