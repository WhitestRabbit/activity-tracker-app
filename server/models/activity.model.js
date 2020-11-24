const mongoose = require('mongoose');

let activitySchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    urgency: {
        type: Boolean,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
}, {
    timestamps: true,
});

let Activity = module.exports = mongoose.model('Activity', activitySchema);