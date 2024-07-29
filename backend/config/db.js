import mongoose from 'mongoose';
import 'dotenv/config'

export const connectDB = async()=>{
    
    try {
        await mongoose.connect(process.env.MONGOURL,{
            useNewUrlParser: true,
          useUnifiedTopology: true,
        })
        console.log("Connected Successfully to MongoDB......:)")
    } catch (error) {
        console.error('Error connecting to MongoDB:', error)
        process.exit(1)
    }
}