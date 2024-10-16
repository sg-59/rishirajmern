
const router=require('express').Router()
const user=require('../Model/productSchema')

router.post('/postData',(req,res)=>{
    console.log(req.body);
    
    try{
const newData=new user(req.body)
newData.save()
return res.send("data saved")
}catch(err){
return res.send(err.message)
}
})


router.get('/getDatabaseData',async(req,res)=>{
   try{
const databasedata=await user.find()
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

router.delete('/deleteDetails/:id',async(req,res)=>{
    try{
        await user.findByIdAndDelete(req.params.id)
res.status(200).json("deleted successfull")
    }catch(err){
        res.status(500).json(err)
    }
})

router.put('/updateData/:id',async(req,res)=>{
    console.log(req.params.id);
    
    try{
await user.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
res.status(200).json({message:"file updated"})
    }catch(err){
res.status(500).json(err)
    }
})




module.exports=router