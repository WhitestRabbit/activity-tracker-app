const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: true,
        unique: true
    },
}, {
    timestamps: true,
});

let User = module.exports = mongoose.model('User', userSchema);