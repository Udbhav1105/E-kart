import { Product } from "../models/productModel.js"
export const showProducts=async (req,res)=>{
    const product= await Product.find()
    res.status(200).json({
        product:product
    })
}