import express from "express"
import bcrypt, { hash } from "bcrypt";
import { UserModel } from "../model/User.model.js";
import jwt from "jsonwebtoken";


const userRouter = express.Router();

userRouter.post("./register",async(req , res)=>{
const {name , email, password, gender, age} = req.body;
try {
    bcrypt.hash(password, 5 , async(err , hash)=>{
  if(err){
    return res.status(500).json({message:"Internal server error"});
  } const User =  new UserModel({
     name,
     email,
     password:hash,
     gender,
     age
  });
  await userRouter.save();
  res.status(201).json({message:"User register successfully"})
})
    
} catch (error) {
    res.status(500).json({message:`Error while registering user${error}`});
}

})

userRouter.post("./login", async (req, res)=>{
    const {email , password}= req.body;
    try {
        const user = await UserModel.findOne({email})
        if(!user){
            return res.status(401).json({message:"User not found"})
        }
        if(user){
            bcrypt.compare(password, user.password, (err,result)=>{
                if(err){
                    return res.status(500).json({message:"Internal server error"})
                }
                if(result){
                   const token = jwt.sign({id:user._id},process.env.SECRET_KEY);
                   return res.status(201).json({message:"User logged In Successfully"}, token)
                }else{
                    return res.status(401).json({message:"Invalid password"})
                }
            })
        }
        
    } catch (error) {
        res.status(501).json({message:`Erro while logging In ${error}`})
    }

})
export default userRouter;