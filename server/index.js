const express=require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()
const cors=require('cors')

app.use(cors())

const userRouterPage=require('./Router/userRouter')
const authRouterPage=require('./Router/authRouter')

mongoose.connect(process.env.MongoUrl).then(()=>{
    console.log("data base are connected");
    
}).catch((err)=>{
    console.log(err);
    
})

app.use(express.json())
app.use('/rishiraj',userRouterPage)
app.use('/api',authRouterPage)


app.listen(9000,()=>{
    console.log("port is connected");
    
})
