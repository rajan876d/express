import User from "../models/User.js";
import bcrypt from "bcrypt";

const login = async(input) =>{
    const user = await User.findOne({$or:[{email: input?.email},{phone: input?.phone}]});
     if( !user){
    throw{
        message: 'user not found',
    };
   }
   const isPasswordMatch = await bcrypt.compare(input.password, user.password);

  
   if(!isPasswordMatch){
    throw {
        message: 'invalid',
    };

   }
   return {
    name:user.name,
    age:user.age,
    gender:user.gender,
    phone:user.phone,
    email:user.email
   };
};

const  register =async(input) =>{
   const hashPassword = await bcrypt.hash(input.password,10);

    return await User.create({
        name:input.name,
        age:input.age,
        email:input.email,
        phone:input.phone,
        password:hashPassword,
    });
};

export default {login,register};