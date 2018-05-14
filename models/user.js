const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    phoneNumber: Number,
    organization: String,
    payment: Number,
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", UserSchema);