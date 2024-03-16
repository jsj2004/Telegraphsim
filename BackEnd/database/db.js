import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

const connection = async () => {
    const URL = `${MONGODB_URI}`;
    try {
        await mongoose.connect(URL);
        console.log("Connected to database successfully");    
    } catch(error) {
        console.log("Error in connecting to database",error.message);
    }
} 

export default connection;