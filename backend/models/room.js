// models/Room.js
import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
  creatorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const Room = mongoose.model('Room', roomSchema);
export default Room;
