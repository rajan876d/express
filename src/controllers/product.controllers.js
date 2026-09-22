import productServices from "../services/product.services.js";



const createProduct = async (req, res) => {
   try{
    const createdProduct = await productServices.createProduct(req.body, req.files, req.user._id);
    res.json(createdProduct);
   }
   catch(error){
    res.status(400).json({message: error.message})
   };
};
const getproducts = async (req, res) => {
   try{
    const products = await productServices.getProduct(req.query);
    res.json(products);
   }
   catch(error){
    res.status(400).json({message: error.message})
   };
};
const getproductById = async (req, res) => {
   try{
    const product = await productServices.getproductById(req.params.id);
    res.json(product);
   }
   catch(error){
    res.status(400).json({message: error.message})
   };
};

const updateProduct = async (req, res) => {
   try{
    const product = await productServices.updateProduct(req.params.id,
      req.body,
      req.user._id,
      req.files);
    res.json(product);
   }
   catch(error){
    res.status(400).json({message: error.message})
   };
};
const deleteProduct = async (req, res) => {
   try{
    const product = await productServices.deleteProduct(req.params.id,req.user._id);
    res.json("product have been deleted");
   }
   catch(error){
    res.status(400).json({message: error.message})
   };
};

const getbrands = async (req, res) => {
   try{
    const products = await productServices.getbrands();
    res.json(products);
   }
   catch(error){
    res.status(400).json({message: error.message})
   };
};



export default {createProduct,
   getproducts,
   getproductById ,
   updateProduct , 
   deleteProduct,
   getbrands};