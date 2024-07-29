import mongoose from 'mongoose';

const userschema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePicture: { type: String },
    email: { type: String, required: true, unique: true },
    status: { type: String, enum: ['online', 'offline', 'away'], default: 'offline' },
    lastLogin: { type: Date }
})

const User = mongoose.model('User', userschema)

export default User;