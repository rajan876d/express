import User from "../models/User.js";
import bcrypt from "bcrypt";
    
const createUser = async() =>{
    return await User.create({
    name:"hari",
    age:24,
    gender:"male",
    phone:"9877777777",
    email:"hari1@gmail.com",
    password:"@Dmin123",
    });

}

const getUsers = async () =>{
    const user = await User.find();
    return user;
}

export default  {createUser,getUsers};