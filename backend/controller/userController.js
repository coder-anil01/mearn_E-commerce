import userModel from "../model/userModel.js"
import JWT from 'jsonwebtoken';
import otpGenerator from 'otp-generator'
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { sendEmailOtp } from "../utility/emailSender.js";
import bcrypt from 'bcrypt';


dotenv.config();
const jwtsecret = process.env.JWT_SECRET;
const emailSender = process.env.EMAIL_SENDER_ADDRESS;
const emailPass = process.env.EMAIL_PASS;


//*************/  CREATE USER  /*************//
export const createUser = async(req, res) => {
    const {name, email, password} = req.body;
    try {
        let otp = Math.floor(Math.random() * 900000) + 100000; // generate random OTP
            sendEmailOtp({email, otp});
        const existUser = await userModel.findOne({email});

        // HASH
        const hashedOtp = await bcrypt.hash(otp.toString(), 10)
        const hashedPassword = await bcrypt.hash(password, 10)

        if(!existUser){
            const newUser = await new userModel({name, email, hashedOtp, hashedPassword}).save();
                res.status(200).send({
                    success: true,
                    message: "Please Cheack Email OTP",
                    newUser,
                })
        }else{
            const user = await userModel.findByIdAndUpdate(existUser._id, {name, hashedOtp, hashedPassword});
                res.status(200).send({
                    success: true,
                    message: "Please Cheack Email OTP",
                    user,
                })
        }
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Internal Server Error"
        })
    }
}



//*************/  VERIFY  EMAIL  /*************//
export const userVerify = async(req, res) => {
    const {email, otp} = req.body;
    console.log(email, otp)
    try {
        const user = await userModel.findOne({email});
        console.log("user", user)
        const match = await bcrypt.compare(otp, user.hashedOtp);
        if (!match) { return res.status(200).send({ success: false, message: "Invalid OTP",})};

            await userModel.findOneAndUpdate({email}, {hashedOtp: '', verify:true}, {new: true})
            const payLoad = { id: user._id, name: user.name, email: user.email, role: user.role };
            // Create Token
            const token = await JWT.sign(payLoad, jwtsecret);
            res.status(200).json({
                success: true,
                message: "User Verify Successfully",
                user: payLoad,
                token,
            })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Internal Server Error"
        })
    }
}


//*************/  SIGN  IN  /*************//
export const signIn = async(req, res) => {
    const {email, password} = req.body;
    try {
        const user = await userModel.findOne({email});
        if(!user){ return res.status(200).send({ success: false, message: "User Not Exist"});}

        const match = await bcrypt.compare(password, user.hashedPassword);
        if (!match){ return res.status(200).send({ success: false, message: "Invalid Password"}); }

        const payLoad = { id: user._id, name: user.name, email: user.email, role: user.role };
        // Create Token
        const token = await JWT.sign(payLoad, jwtsecret);
        res.status(200).send({
            success: true,
            message:"Sign In Successful",
            user: payLoad,
            token,
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Internal Server Error"
        })
    }
}









