import { User } from '../models/userModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { verifyEmail } from '../verifyemail/verifyEmail.js';


export const register=async(req,res)=>{
    try {
        const {firstName, lastName, email,password}=req.body;
        if(!firstName || !lastName || !email || !password) {
            return res.status(400).json({
                success:false,
                message:"all fields are required"
            })
        }
       let user=await User.findOne({email})
       if(user){
        return res.status(400).json({
            success:false,
            message:"user already exists"
        })
       }
       const salt= await bcrypt.genSalt(10)
       const hashedpass=await bcrypt.hash(password,salt)
       const newUser= await User.create({
        firstName,
        lastName,
        email,
        password:hashedpass
       })
       const token=jwt.sign({id:newUser._id},process.env.SECRET_KEY, {expiresIn:"10m"})
       newUser.token=token
       await newUser.save()
       verifyEmail(token,email)
       return res.status(201).json({
        success:true,
        message:"user created successfully",
        token:newUser.token
       })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

export const verify=async(req,res)=>{
    const authheader=req.headers.authorization
    if(!authheader || !authheader.startsWith('bearer')){
        res.status(400).json({
            success:false,
            message:"auth header missing or invalid"
        })
    }
    let token =authheader.split(" ")[1]
    let decoded
    try {
        decoded=jwt.verify(token,process.env.SECRET_KEY)
    } catch (error) {
        if(error.name === "TokenExpiredError"){
            return res.status(400).json({
                success:false,
                message:"token expired"
            })
        }
        return res.status(400).json({
            success:false,
            message:"Verification failed"
        })
    }
    const user=await User.findById(decoded.id)
    if(!user){
        res.status(400).json({
            success:false,
            message:"user does not exist"
        })
    }
    user.token=null
    user.isVerified=true
    await user.save()
    res.status(200).json({
        success:true,
        message:"user verified successfully"
    })
}

export const reVerify=async(req,res)=>{
    let {email} = req.body;
    const user=await User.findOne({email})
    if(!user){
        return res.status(400).json({
            success:false,
            message:"User not found"
        })
    }
    const token=jwt.sign({id:user._id},process.env.SECRET_KEY,{expiresIn:"10m"})
    verifyEmail(token,email)
    res.status(200).json({
        success:true,
        message:"Verification link send successfully"
    })
}

export const login=async(req,res)=>{
    const {email,password}=req.body
    if(!email || !password){
        return res.status(400).json({
            success:false,
            message:"All fields are required"
        })
    }
    let user=await User.findOne({email})
    if(!user){
        return res.status(400).json({
            success:false,
            message:"USer does not exist"
        })
    }
    const isVerified=user.isVerified;
    if(!isVerified){
        return res.status(400).json({
            success:false,
            message:"Verify then login"
        })
    }
    const userPass=await bcrypt.compare(password,user.password);
   
    if(!userPass){
        return res.status(400).json({
            success:false,
            message:"password is wrong"
        })
    }
    const token=jwt.sign({id:user._id,email:user.email},process.env.SECRET_KEY,{expiresIn:"1h"})
    user.token=token
    res.cookie("token",token,{
        httpOnly:true,
        maxAge:60*60*1000
    })
    user.isLoggedIn=true;
    await user.save()
    return res.status(200).json({
        success:true,
        message:"logged in successfully",
        role:user.role
    })
}


export const isAvailable=async(req,res)=>{
    try{
        let token=req.cookies.token;
        if(!token){
            res.status(400).json({
                success:false,
                message:"token not found"
            })
        }
        let decoded=jwt.verify(token,process.env.SECRET_KEY);
        console.log(decoded)
        let user=await User.findById(decoded.id);
        if(!user){
            res.status(400).json({
                success:false,
                message:"user not found"
            })
        }
        else{
            res.status(200).json({
                success:true,
                message:"user found",
                user:user
            })
        }
    }
    catch(error){
        res.status(500).json({
            success:false,
            error:error.message
        })
    }
}

export const logout=async (req,res)=>{
    const token=req.cookies.token
    if(!token){
        res.status(400).json({
            success:false,
            message:"token not found"
        })
    }
    let decoded=jwt.verify(token,process.env.SECRET_KEY)
    let user=await User.findById(decoded.id);
    if(!user){
        res.status(400).json({
            success:false,
        message:"User not found"
        })
    }
    user.token=""
    user.isLoggedIn=false
    await user.save()
    res.cookie("token","")
    res.status(200).json({
        success:true,
        message:"User logged out successfully"
    })
}

export const cart = async (req, res) => {
    try {
        const token = req.cookies.token;
        // const { _id } = req.body;

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "No token provided"
            });
        }

        const decode = jwt.verify(token, process.env.SECRET_KEY);

        const user = await User.findOne({ email: decode.email })    ;

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        else{
            return res.status(200).json({
                success:true,
                cart:user.cart
            })
        }

        // Check if product already exists
        // const existingProduct = user.cart.find(
        //     item => item.product.toString() === id
        // );

        // if (existingProduct) {
        //     existingProduct.quantity += 1;
        // } else {
        //     user.cart.push({
        //         product: id,
        //         quantity: 1
        //     });
        // }

        // await user.save();
        // console.log(user.cart)
        // return res.status(200).json({
        //     success: true,
        //     message: "Item added successfully"
        // });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const addToCart=async(req,res)=>{
    const{_id}=req.body;
    console.log("received",_id)
    const {token}=req.cookies;
    if(!token){
        return res.status(404).json({
            success:false,
            message:'no token found'
        })
    }
    const decoded=jwt.verify(token,process.env.SECRET_KEY);
    const user=await User.findOne({email:decoded.email})
    // console.log(decoded)
    if(!user){
        return res.status(500).json({
            success:true,
            message:"user not available"
        })
    }
    const exist=user.cart.find(item=> item.product===_id)
    if(exist){
        exist.quantity+=1
        await user.save()
    }
    else{
        user.cart.push({product:_id,quantity:1})
        await user.save()
    }
    res.status(200).json(
        {
            success:true,
            message:"item added successfully"
        }
    )
}

export const remove=async(req,res)=>{
    const {_id}=req.body;
    const token=req.cookies.token
    if(!token){
        return res.status(500).json({
            success:false,
            message:"token is missing"
        })
    }
    if(!_id){
        return res.status(500).json({
            success:false,
            message:"_id is missing"
        })
    }
    const decode=jwt.verify(token,process.env.SECRET_KEY)
    const user=await User.findOne({email:decode.email})
    const prod=user.cart.find(
        item=>item.product===_id
    )
    if(prod){
        prod.quantity-=1
        if(prod.quantity<1){
            user.cart=user.cart.filter(item=>item.product!==_id)
        }
    }
    await user.save();
    res.status(200).json({
        success:true,
        message:"item removed successfully"
    })
}

export const verifyUser = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Login required" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

export const checkAuth = async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message:"login"
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.SECRET_KEY
    );

    const user = await User.findOne({_id:decoded.id});

    return res.status(200).json({
      success: true,
      user,
      message:"logout"
    });
  } catch (err) {
    return res.status(401).json({
      success: false,
      message:err.message
    });
  }
};
