const router=require('express').Router()
const user=require('../Model/productSchema')
const crypto=require('crypto-js')
const jwt=require('jsonwebtoken')
router.post('/login',async(req,res)=>{
    try{
const findUser=await user.findOne({email:req.body.email})
if(!findUser){
    return res.status(401).json("email is not found")
}
console.log(findUser);

const hashedPassword=crypto.AES.decrypt(findUser.password,process.env.secKey)
console.log("hashed password",hashedPassword);

const originalpassword=hashedPassword.toString(crypto.enc.Utf8)

console.log("original password",originalpassword);

if(originalpassword != req.body.password){
    return res.status(401).json("email and password does'nt match")
}

const token=jwt.sign({id:findUser._id},process.env.jwtsecKey,{expiresIn:"1d"})



return res.status(200).json({jwtToken:token,userId:findUser._id})

    }catch(err){
  return res.status(500).json(err)      
    }
})

module.exports=router