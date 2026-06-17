import mongoose from 'mongoose'

const productSchema=new mongoose.Schema({
    image_url:[],
    details:String,
    price:Number,
    category:String,
    subCategory:String,
    bestseller:Boolean,
    latest:Boolean,
})

export const Product = mongoose.model("Product", productSchema);