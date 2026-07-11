import Razorpay from "razorpay";
import razorpay from "../config/razorpay.js";

export const createOrder = async (req, res) => {
    const {total}=req.body;
    const order = await razorpay.orders.create({
        amount: total * 100,
        currency: "INR",
    });

    res.status(200).json(order);
};