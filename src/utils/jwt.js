import jwt from "jsonwebtoken";
import config from "../config/config.js";
const generateToken =(payload) =>{
 const token = jwt.sign(payload, config.jwtSecret); 
return token;
};

export default {generateToken};            