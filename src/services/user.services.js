import User from "../models/User.js";
import bcrypt from "bcrypt";
import uploadFiles from "../utils/fileUploader.js";
    
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

const deleteUser = async (id)=>{
    await User.findByIdAndDelete(id);
};

const updateProfileImage = async (id, file) =>{
    const uploadedFiles = await uploadFiles([file]);
    return User.findByIdAndUpdate(id,{profileImageUrl:uploadedFiles[0].url},{new: true})
}

export default  {createUser,getUsers,deleteUser,updateProfileImage};