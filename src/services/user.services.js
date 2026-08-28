import User from "../models/User.js";
const createUser = () =>{
    //create user 
}

const getUsers = async () =>{
    const user = await User.find();
    return user;
}

export default  {createUser,getUsers};