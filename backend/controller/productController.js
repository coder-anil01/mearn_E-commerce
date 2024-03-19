import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
import productModel from '../model/productModel';

dotenv.config();
cloudinary.config({
    cloud_name: process.env.CLOUDNEARY_NAME,
    api_key: process.env.CLOUDNEARY_API_KEY,
    api_secret: process.env.CLOUDNEARY_API_SECRET,
  });

  //*************/  CREATE  /*************//
export const createProduct = async(req, res) => {
    const {title,description,MRP,currentPrice,imagesBase64,size,colors,category,stock,warranty,ratings,user} = req.body;
    let images = [];
    try {
        for (let i = 0; i < imagesBase64.length; i++) {
            const hostImage = await cloudinary.uploader.upload(imagesBase64[i], {folder: 'Eshop/Products'});
                images.push({public_id: hostImage.public_id, url: hostImage.secure_url},);
            }
            const product = await new productModel(
                {title,description,MRP,currentPrice, size, colors, category, stock, warranty, ratings, user}).save();
            res.status(200).send({
                success: true,
                product,
                message: 'Product Created Successfully'
            })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Internal Server Error",
        })
    }
}

//*************/  GET  /*************//
export const getProduct = async(req, res) => {
    try {
        const products = await productModel.find();
        res.status(200).send({
            success: true,
            products,
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Internal Server Error",
        })
    }
}
