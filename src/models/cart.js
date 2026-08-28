import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    productname:String,
    numberofproduct:Number,

});

export default mongoose.model("cart", cartSchema);