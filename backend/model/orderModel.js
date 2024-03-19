import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        },
        product: {
            type : mongoose.Schema.Types.ObjectId,
            ref:'product',
        },
        color: {
            type:String,
        },
        size: {
            type: String
        }
    },
  { timestamps: true }
);

export default mongoose.model("address", orderSchema);