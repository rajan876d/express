import Product from "../models/Product.js";
const createProduct = async () =>{
 return  await   Product.create({
         // name:"s22-untra",
         category:"s-phone",
         brand:"samsung",
         price:120000,
         stock: 21,
      });
};

export default {createProduct};