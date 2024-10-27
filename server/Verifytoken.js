const jwt=require('jsonwebtoken')
const verifyjwtToken=(req,res,next)=>{
    console.log("First",req.headers.token);
try{
    const token=req.headers.token

    if(token){
jwt.verify(token,process.env.jwtsecKey,(err,data)=>{
console.log("final answer in jwt verifying",data);
if(err){
    return res.status(401).json("Token is not authorized")
}

if(req.params.id==data.id){
    next()
}else{
    return res.status(401).json("user and token does'nt match")
}

})
    }else{
        return res.status(401).json("Token not found ...")
    }

}catch(err){

}
}

module.exports=verifyjwtToken