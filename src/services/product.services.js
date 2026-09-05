import Product from "../models/Product.js";
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
const updateProduct = async (id, data, userid) => {
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
   return await Product.findByIdAndUpdate(id, data, { new: true });
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
const createProduct = async (input, userid) => {
   const products = await Product.create({
      name: input.name,
      category: input.category,
      brand: input.brand,
      price: input.price,
      stock: input.stock,
      createdBy: userid,

   });
   return {
      name: products.name,
      category: products.category,
      brand: products.brand,
      price: products.price,
      stock: products.stock,
      createdBy: products.createdBy,
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