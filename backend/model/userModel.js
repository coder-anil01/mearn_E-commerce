import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        email: {
            type: String,
            default: "dummy@gmail.com"
        },
        hashedOtp: {
            type: String,
        },
        hashedPassword: {
            type: String,
        },
        verify: {
            type: Boolean,
            default: false,
        },
        role: {
            type: Number,
            default: 0
        },
    }, {timestamps: true});
export default mongoose.model('user', userSchema);