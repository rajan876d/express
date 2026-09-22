import Order from "../models/Order.js";
import User from "../models/User.js";
import crypto from "crypto";

const getAllOrders = async() =>{
    return await Order.find(); 
};
const getOrderById = async() =>{
};
const createOrder = async(data ,user) =>{
    const orderNumber = crypto.randomUUID();

    let shippingAddress = user.address;

    if (data?.shippingAddress){
        shippingAddress = data.shippingAddress;
        
    }
    return await Order.create({...data, user:user._id, orderNumber, shippingAddress});
   
};
const updateOrder = async() =>{
};
const deleteOrder = async() =>{
};

export default {getAllOrders,getOrderById,createOrder,updateOrder,deleteOrder};