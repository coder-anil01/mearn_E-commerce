import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    phone: {
      type: Number,
    },
    phonesec: {
      type: Number,
    },
    firstAt:{
        type: String,
    },
    secndAt:{
        type: String,
    },
    city:{
        type: String,
    },
    pin: {
        type: Number,
    },
    state:{
        type: String,
    },
    },
  { timestamps: true }
);

export default mongoose.model("address", addressSchema);