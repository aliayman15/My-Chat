import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  groupId: { type: mongoose.Schema.Types.ObjectId, ref: 'Group' }, // Can be null for direct chats
  lastMessageId: { type: mongoose.Schema.Types.ObjectId, ref: 'Message' },
  lastMessageTimestamp: { type: Date },
  chatType: { type: String, enum: ['direct', 'group'], default: 'direct' },
  name: { type: String }, // For group chats
  description: { type: String }, // For group chats
  profilePicture: { type: String } // For group chats
});

const Chat = mongoose.model('Chat', chatSchema);

export default Chat;