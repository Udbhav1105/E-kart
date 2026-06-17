import express from 'express'
import {Product} from '../models/productModel.js'

export const addProduct=async (req,res)=>{
    const {image,details,price} =req.body
    let product=await Product.create({
        image_url:image,
        details,
        price
    })
    return res.status(200).json({
        success:true,
        message:"product created successfully",
        product:product
    })
}