import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true,"name required"],
    },

    age:Number,
    gender: String,

    roles: {
        types:[String],
        default: ["CUSTOMER"],
        enum:["CUSTOMER","MERCHANT","ADMIN","SUPER_ADMIN"],
    },
    phone:{
        type:String,
        required:[true,"Phone number is required."],
        unique: [true, "Phone number olready exists"],
    },
    CreatedAt:{
        type: Date,
        default: Date.now(),
    },
   email: {
    type: String,
    required: [true, "Email address is required."],
    validate: {
        validator: (value) => {
            const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            return emailRegex.test(value);
        },
        message: "Please enter a valid email address."
    }
},
    password:{
        type:String,
        required:[true, "Password is required"],
    },

});

export default mongoose.model("User",userSchema); 