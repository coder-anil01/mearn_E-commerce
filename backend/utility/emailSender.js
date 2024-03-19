import otpGenerator from 'otp-generator'
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();
const jwtsecret = process.env.JWT_SECRET;
const emailSender = process.env.EMAIL_SENDER_ADDRESS;
const emailPass = process.env.EMAIL_PASS;

const transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    secure: true,
    auth: {
        user: emailSender,
        pass: emailPass,
    }
});


export const sendEmailOtp = async({email, otp}) => {
    console.log(email);
    console.log(otp);
    try {
        const info = await transporter.sendMail({
            from: {
                name: "Shopu",
                address:"anilkumar62034mac@gmail.com"
            },
            to: email,
            subject: 'OTP Verification',
            text: `Your OTP for verification is: ${otp}`
        });
        
        return info
    } catch (error) {
        console.log(error)
    }
}