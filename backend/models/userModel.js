import mongoose from 'mongoose'
import { Product } from './productModel.js'
const userSchema=new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    profilePic:{type:String,default:""}, //Cloidinary image url
    profilePicPublicId:{type:String,default:""}, //for deleting cloudinary image
    email:{type:String, required:true,unique:true},
    password:{type:String, required:true},
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    },
    token:{type:String,default:""},
    isVerified:{type:Boolean,default:false},
    isLoggedIn:{type:Boolean,default:false},
    otp:{type:String,default:null},
    otpExpiry:{type:Date,default:null},
    address:{type:String},
    city:{type:String},
    zipcode:{type:String},
    phoneNo:{type:Number},
   cart:[{
    product:{
        type:String,
    },
    quantity:{
        type:Number,
        default:1
    }
   }]
} ,{timestamps:true})

export const User= mongoose.model("User" ,userSchema)
