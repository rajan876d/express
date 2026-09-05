import User from "../models/User.js";
import bcrypt from "bcrypt";
    
const createUser = async(data) =>{
       const hashedPassword = await bcrypt.hash(userData.password, 10);
    return await User.create({
        name:data.name,
        email:data.email,
        role:data.role,
        password:hashedPassword,
        phone:data.phone,

    });
}

const getUsers = async () =>{
    const user = await User.find();
    return user;
}

export default  {createUser,getUsers};