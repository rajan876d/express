import userServers from "../services/user.services.js"
import uploadFiles from "../utils/fileUploader.js";
const createUser = async (req,res) =>{
    try{
         const createUser =  await userServers.createUser(req.body);
        res.json(createUser);
    }
    catch(error){
        res.status(400).json({message: error.message});
    };
};


const getUser = async (req,res) =>{
    const users = await userServers.getUser();
    res.json(users);
};


const updateProfileImage = async(req,res) =>{
    try{
        const data = await userServers.updateProfileImage(req.user._id, req.file);

        res.json(data);
    }catch (error){
        res.status(400).json({message:error.message});
    }
};
export default {createUser,getUser,updateProfileImage};


