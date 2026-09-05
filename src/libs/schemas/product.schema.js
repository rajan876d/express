import * as z from "zod";

const productSchema =z.object({
    name:z
    .string({error:"product name is required"})
    .check(z.minLength(3,{error:"name is too small"}),z.maxLength(16,{error:"name is too large"}))
    .trim(),
   
    brand:z.string().trim().optional(),
    
    category:z.string({error:"category name is required"})
    .trim(),
    
    price:z.number({error:(data)=>data.input == undefined?"price  is required":"price must be in string "})
    .min(5000,{error:"price must be greater than 5000"}).max(1000000,{error:"price must be smaller than 1000000"}),
   
    stock:z.number().min(1,{error:"stock must be greater then 1"}).optional(),
  
    imageUrls:z.array(z.string().trim()).optional(),
});

export {productSchema}  

