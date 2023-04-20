const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;


const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName : { type: String, required: true },
    password: { type: String, required: true, minlength: 8 },
    email: { type: String, required: true, unique: true },
    sessionId : { type: String},
    lastKnownIP: { type: String },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true,
    }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('user', userSchema);


