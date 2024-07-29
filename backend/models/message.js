import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema({
    senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    roomId: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' }, // Can be null for direct messages
    message: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    status: { type: String, enum: ['delivered', 'read'], default: 'delivered' }
})

const Message = mongoose.model('Message',messageSchema)

export default Message