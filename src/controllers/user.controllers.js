import userServers from "../services/user.services.js"
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

export default {createUser,getUser};


