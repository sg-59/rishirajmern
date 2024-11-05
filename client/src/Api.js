import axios from 'axios'
import { addtoLogindata, removedata } from './Redux/loginslice';

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

export const ProfileData=async(id)=>{
    try{
const responsesingleData=await axios.get(`http://localhost:9000/rishiraj/getDatabaseData/${id}`)
console.log("final answer get in single data",responsesingleData.data);
return responsesingleData.data

    }catch(err){

    }
}

export const UpdateDatas=async(id,data)=>{
    try{
const UpdateInfo=await axios.put(`http://localhost:9000/rishiraj/updateData/${id}`,data)

    }catch(err){

    }

}

export const deleteDatas=async(id,dispatch)=>{
    try{
const response=await axios.delete(`http://localhost:9000/rishiraj/deleteDetails/${id}`)
console.log(response.data);
response.data ? dispatch(removedata()) : null
return response.data

    }catch(err){

    }
}