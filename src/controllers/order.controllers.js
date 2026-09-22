
import orderServices from "../services/order.services.js";

const getAllOrders = async (req,res) =>{

    try{
        const orders =await orderServices.getAllOrders();
        res.json(orders);
    }catch(error){
        res.status(400).json({message:error.message});
    };
};
const getOrderById =  (req,res) =>{

    try{
        const orders =  orderServices.getOrderById();
        res.json(orders);
    }catch(error){
        res.status(400).json({message:error.message});
    };
};
const createOrder = async (req,res) =>{

    try{
        const orders = await orderServices.createOrder(req.body,req.user);
        res.json(orders);
    }catch(error){
        res.status(400).json({message:error.message});
    };
};
const updateOrderById =  (req,res) =>{

    try{
        const orders =  orderServices.updateOrder();
        res.json(orders);
    }catch(error){
        res.status(400).json({message:error.message});
    };
};
const deleteOrderById =  (req,res) =>{

    try{
        const orders =  orderServices.deleteOrder();
        res.json(orders);
    }catch(error){
        res.status(400).json({message:error.message});
    };
};

export default {getAllOrders,getOrderById,createOrder,updateOrderById,deleteOrderById};