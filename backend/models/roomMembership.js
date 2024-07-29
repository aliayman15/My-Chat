// models/RoomMembership.js
import mongoose from 'mongoose';

const roomMembershipSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  roomId: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
  joinedAt: { type: Date, default: Date.now },
  role: { type: String, enum: ['admin', 'member'], default: 'member' }
});

const RoomMembership = mongoose.model('RoomMembership', roomMembershipSchema);
export default RoomMembership;
