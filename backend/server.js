import express from 'express';
import { connectDB } from './config/db.js';
const app = express();


connectDB()
app.listen(process.env.PORT||3000,()=>{
    console.log('connected')
})
