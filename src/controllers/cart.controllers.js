// import cartServices from "../models/cart.js";

import cartServices from "../services/cart.services.js"

const createCart = async (req,res) =>{
   await cartServices.createCart();
    res.send("New cart table have been created")
};

export default {createCart};