import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
import categoryModel from '../model/categoryModel.js';

dotenv.config();
cloudinary.config({
    cloud_name: process.env.CLOUDNEARY_NAME,
    api_key: process.env.CLOUDNEARY_API_KEY,
    api_secret: process.env.CLOUDNEARY_API_SECRET,
  });


//*************/  CREATE  /*************//
export const createCategory = async(req, res) => {
    const {name, imageBase64} = req.body;
    try {
        const existCategory = await categoryModel.findOne({name});
        if(!existCategory){
            const hostImage = await cloudinary.uploader.upload(imageBase64, {folder: 'Eshop/Category'});
            const category = await new categoryModel({name, image: hostImage.secure_url, public_id: hostImage.public_id}).save();
            res.status(200).send({
                success: true,
                message: `${name} is Created Successfull`,
                category,
            })
        }else{
            res.status(200).send({
                success: false,
                message: `${name} is Already Created`,
            })
        }
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Internal Server Error"
        })
    }
}

//*************/  GET  /*************//
export const getCategory = async(req, res) => {
    try {
        const categories = await categoryModel.find();
        res.status(200).send({
            success: true,
            categories,
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Internal Server Error"
        })
    }
}

//*************/  DELETE  /*************//
export const deleteCategory = async (req, res) => {
    const {id, public_id} = req.body;
    try {
        await cloudinary.uploader.destroy(public_id);
        await categoryModel.findByIdAndDelete(id);
            res.status(200).send({
                success: true,
                message: "Category Deleted Succeessfull"
            })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Internal Server Error"
        })
    }
}