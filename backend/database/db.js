import mongoose from 'mongoose'
import dotenv from 'dotenv/config'

const connectDB=async()=>{
    try {
       await mongoose.connect(`${process.env.MONGO_URI}/ekart`)
       console.log("db connected")
    } catch (error) {
        console.log("error aagyi",error.message)
    }
}

export default connectDB;