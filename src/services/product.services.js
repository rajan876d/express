import Product from "../models/Product.js";
import uploadFiles from "../utils/fileUploader.js";
const getProduct = async (query) => {

   const limit = query?.limit;
   const sort = query?.sort ? JSON.parse(query.sort) : null;
   const offset = query?.offset;

   const filter={};

   if(query?.category) filter.category = query?.category;
   if(query?.brand) filter.category ={$in: brands.split(",")};
   if(query?.name) filter.name = {$regex: query?.name, $option:"i"};

  
   const brands = query?.brands;
   return await Product.find(filter)
   .limit(limit)
   .sort(sort)
   .skip(offset);
}

const getproductById = async (id) => {
   const product = await Product.findById(id);
   if (!product) {
      throw {
         message: "Product not found."
      }
   }
   return product;
}
const updateProduct = async (id, data,userid,files) => {
   const product = await Product.findById(id);
   if (!product) {
      throw {
         message: "Product not found."
      }
   }
   {
      if (product.createdBy.toString() !== userid) {
         throw {
            message: "This user can't update the product"
         }
      }
   }

   const updateData = data;
   if (files && files.length > 0 ){
      const uploadedFiles = await uploadFiles(files);

      updateData.imageUrls = uploadedFiles.map((item) => item.url);
   }
   return await Product.findByIdAndUpdate(id, updateData, { new: true });
}

const deleteProduct = async (id, userId) => {
   const product = await Product.findById(id);
   if (!product) {
      throw {
         message: "Product not found."
      }
   }
   if (product.createdBy.toString() !== userId) {
      throw {
         message: "this user cant delete the product"
      }
   }
   return await Product.findByIdAndDelete(id, { new: true });
}
const createProduct = async (input, files,  userid) => {
   const uploadedFiles = await uploadFiles(files);
   const imageUrls = uploadedFiles.map(item=>item.url)
   const products = await Product.create({
      name: input.name,
      category: input.category,
      brand: input.brand,
      price: input.price,
      stock: input.stock,
      createdBy: userid,
      imageUrls: imageUrls,

   });
   return {
      name: products.name,
      category: products.category,
      brand: products.brand,
      price: products.price,
      stock: products.stock,
      createdBy: products.createdBy,
      imageUrls: products.imageUrls,
   }
};

const getbrands = async (id) => {
   const product = await Product.distinct("brand");
   if (!product) {
      throw {
         message: "Product not found."
      }
   }
   return product;
}
export default { createProduct, getProduct, getproductById, getbrands, updateProduct, deleteProduct };