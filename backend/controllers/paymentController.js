import Razorpay from "razorpay";
import razorpay from "../config/razorpay.js";
import crypto from 'crypto'

export const createOrder = async (req, res) => {
    const {total}=req.body;
    const order = await razorpay.orders.create({
        amount: total * 100,
        currency: "INR",
    });

    res.status(200).json(order);
};

export const key=async(req,res)=>{
    res.json({
        key:process.env.RAZORPAY_KEY
    })
}

export const verifypayment=async(req,res)=>{
    const {response}=req.body;
    order_id=response.razorpay_order_id;
    payment_id=response.razorpay_payment_id
    const generatedsign=crypto.createHmac("sha256",process.env.RAZ_SECRET).update(order_id+"|"+payment_id).digest("hex");
    if(generatedsign===response.razorpay_signature){
        return res.status(200).json({
            success:true,
            message:"Payment succcessful"
        })
    }
    else{
        res.status(400).json({
            success:false,
            message:"payment failed"
        })
    }
}