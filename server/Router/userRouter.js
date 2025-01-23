
const router=require('express').Router()
const user=require('../Model/productSchema')
const crypto=require('crypto-js');
const verifyjwtToken=require('../Verifytoken')
const multer=require('multer')
const cloudinary=require('cloudinary').v2
require('dotenv').config()

cloudinary.config({ 
    cloud_name:process.env.Cloudname,
    api_key:process.env.APIkey, 
    api_secret:process.env.APIsecret // Click 'View API Keys' above to copy your API secret
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './Images')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

router.post('/postData',upload.single('image'),async(req,res)=>{
    console.log("first",req.body);
    console.log("second",req.file);

    const filedata=await cloudinary.uploader.upload(req.file.path)
    console.log("third",filedata);
    const picture=filedata.secure_url

    req.body.password=crypto.AES.encrypt(req.body.password,process.env.secKey).toString()
    
    try{
const newData=new user({image:picture,...req.body})
const savedData=await newData.save()
return res.status(200).json(savedData)
}catch(err){
return res.send(err.message)
}
})


router.get('/getDatabaseData/:id',verifyjwtToken,async(req,res)=>{
console.log("token in backend...............",req.headers.token);

    
   try{
const databasedata=await user.findById(req.params.id)
res.send(databasedata)
    }catch(err){
res.send(err)
    }
})

// router.put('/updateData/:id',async(req,res)=>{
//     console.log(req.body);
    
// try{
// const updateData=await user.findByIdAndUpdate(req.params.id,{$set:{name:req.body.Name,email:req.body.Email}},{new:true})
// res.send(updateData)
// }catch(err){
// res.send(err)
// }
// })

router.delete('/deleteData',async(req,res)=>{

    console.log("***********",req.body.Email);
    
    try{
await user.findOneAndDelete({email:req.body.Email})
res.send("data deleted")
    }catch(err){
res.send(err)
    }
})

router.delete('/deleteDetails/:id',verifyjwtToken,async(req,res)=>{
    try{
        await user.findByIdAndDelete(req.params.id)
res.status(200).json("deleted successfull")
    }catch(err){
        res.status(500).json(err)
    }
})

router.put('/updateData/:id',verifyjwtToken,async(req,res)=>{
    console.log(req.params.id);
    
    try{
await user.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
res.status(200).json({message:"file updated"})
    }catch(err){
res.status(500).json(err)
    }
})




module.exports=router