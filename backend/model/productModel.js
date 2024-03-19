const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
    },
    MRP: {
        type: Number,
        required: true,
    },
    currentPrice: {
        type: Number,
        required: true,
    },
    images: [{
        public_id: {
            type: String,
        },
        url: {
            type: String,
        }
    },],
    size:[{
        type:String,
    },],
    colors:[{
        type:String,
    },],
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category',
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    warranty: {
        type: Number,
        default: 0
    },
    ratings: {
        type: String,
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
        required: true
    },
    reviews: [{
        name: {
            type: String,
        },
        rating: {
            type: Number,
        },
        comment: {
            type: String,
        },
        image:{
            type : String
        }
    },],
},{timestamps: true});

module.exports = mongoose.model('product', productSchema);