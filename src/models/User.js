import mongoose from "mongoose";
import { emailRegex } from "../constants/regex.js";
import { Role_Admin, Role_Customer, Role_Merchant, Role_Super_Admin } from "../constants/role.js";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true,"name required"],
    },

    age:Number,
    gender: String,

    roles: {
        type:[String],
        default: ["CUSTOMER"],
        enum:[Role_Admin, Role_Customer, Role_Merchant, Role_Super_Admin],
    },
    phone:{
        type:String,
        required:[true,"Phone number is required."],
        unique: true,
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
            return emailRegex.test(value);
        },
        message: "Please enter a valid email address."
    },
    unique:true
},
    password:{
        type:String,
        required:[true, "Password is required"],
    },
    isActive:{
        type:Boolean,
        default:true,
    },
    profileImageUrl:String,
    address:{
            city:{
                type:String,
                // required:true,
            },
            provice:{
                type:String,
            },
            street:String,
            country:{
                type:String,
                default:"Nepal",
            },
        },
});

export default mongoose.model("User",userSchema); 