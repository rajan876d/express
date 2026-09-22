import {v2 as cloudinary } from "cloudinary";
import config from "../config/config.js";

const connectCloudinary =() =>{
    cloudinary.config({
    cloud_name:config.cloudinary.cloudName,
    api_key: config.cloudinary.apiKey,
    api_secret: config.cloudinary.apiSecret,
});

console.log("cloudinary connected successfully")
}

export default connectCloudinary;