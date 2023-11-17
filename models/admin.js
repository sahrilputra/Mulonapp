const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Masukan Nama"],
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