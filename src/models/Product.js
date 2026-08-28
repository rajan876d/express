import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
    },
    brand: String,
    category: String,
    price: Number,
    cretedAt:{
        type:Date,
        default: Date.now(),
    },

    stock:{
        type:Number,
        default: 1,
    },
});
export default mongoose.model("Product", productSchema);





