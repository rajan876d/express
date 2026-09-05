import express from "express";
import authServices from "../services/auth.services.js";
import jwtUtils from "../utils/jwt.js";
const login =async (req,res) =>{
  console.log(req.headers.cookie)
  try{
     const data = await  authServices.login(req.body);
     const token =jwtUtils.generateToken(data);

     res.cookie("authToken",token,{
      maxAge:86400*1000, 
     });
    res.json(data);
    

    console.log(data);
  }
  catch(error){
    res.status(400).json({message:error.message});
  }
};
const register = async(req,res) =>{
  
  try{
const data = await authServices.register(req.body);
const token =jwtUtils.generateToken(data);
res.cookie("authToken",token,{
  maxAge:86400 * 1000,
});
    res.json(data);
  }
  catch(error){
    res.status(400).json({message:error.message});
  }
};

const logout=(req,res)=>{
  res.clearCookie("authToken");
  res.json({message:"cookies clear"})
}

export default {login,register,logout};