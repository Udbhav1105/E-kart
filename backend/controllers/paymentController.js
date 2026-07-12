import Razorpay from "razorpay";
import razorpay from "../config/razorpay.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";

export const createOrder = async (req, res) => {
  const { total } = req.body;
  const order = await razorpay.orders.create({
    amount: total * 100,
    currency: "INR",
  });

  res.status(200).json(order);
};

export const key = async (req, res) => {
  res.json({
    key: process.env.RAZORPAY_KEY,
  });
};

export const verifypayment = async (req, res) => {
  const { response } = req.body;
  const token = req.cookies.token;
  if (!token) {
    return res.status(404).json({
      success: false,
      message: "token not found",
    });
  }
  const decode = jwt.verify(token, process.env.SECRET_KEY);

  const order_id = response.razorpay_order_id;
  const payment_id = response.razorpay_payment_id;
  const generatedsign = crypto
    .createHmac("sha256", process.env.RAZ_SECRET)
    .update(order_id + "|" + payment_id)
    .digest("hex");
  if (generatedsign === response.razorpay_signature) {
    const user = await User.findOne({ email: decode.email });
    user.cart.forEach((item) => {
      user.order.push({
        product: item.product,
        quantity: item.quantity,
        status: "Placed",
        order_id: order_id,
      });
    });
    user.cart = [];
    await user.save();
    return res.status(200).json({
      success: true,
      message: "Payment succcessful",
    });
  } else {
    res.status(400).json({
      success: false,
      message: "payment failed",
    });
  }
};
