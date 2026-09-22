import mongoose from "mongoose";
import { required } from "zod/mini";

const orderSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },

    orderItems:[
        {
        product:{
            type: mongoose.Schema.ObjectId,
            ref:"Product",
            required:true,
        },
        quantity:{
            type: Number,
            default: 1,
            min: 1,
        }
    }],

    status:{
        type: String, 
        deafult: "PENDING",
        enum:['PENDING',"CONFIRMED","CANCELLED","SHIPPING","DELIVERED"],
    },
    shippingAddress:{
        city:{
            type:String,
            required:true,
        },
        provice:{
            type:String,
        },
        street:String,
        country:{
            type:String,
            default:"Nepal",
        },
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    totalPrice:{
        type:Number,
        required:true,
    },
    orderNumber:{
        type:String,
        required:true,
    },
});

export default mongoose.model('Order', orderSchema);