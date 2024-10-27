import axios from 'axios'
import { addtoLogindata } from './Redux/loginslice';

export const signupData=async(data)=>{
    console.log("where is data ?",data);
    
    try{
      const responsedatas=await  axios.post('http://localhost:9000/rishiraj/postData',data)
      console.log("final answer",responsedatas);
      
    }catch(err){
console.log(err.message);

    }
}

export const loginData=async(data,dispatch)=>{
    try{
const responsedata=await axios.post('http://localhost:9000/api/login',data)
console.log(responsedata.data);
dispatch(addtoLogindata(responsedata.data))
    }catch(err){
console.log(err.message);

    }
}