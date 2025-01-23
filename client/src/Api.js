import axios from 'axios'
import { addtoLogindata, removedata } from './Redux/loginslice';
import { PublicRequest, SecureRequest } from './Redux/Axioscreate';

export const signupData=async(data)=>{
    console.log("where is data ?",data);
    
    try{
      const responsedatas=await  PublicRequest.post('/rishiraj/postData',data)
      console.log("final answer",responsedatas);
      
    }catch(err){
console.log(err.message);

    }
}

export const loginData=async(data,dispatch)=>{
    try{
const responsedata=await PublicRequest.post('/api/login',data)
console.log(responsedata.data);
dispatch(addtoLogindata(responsedata.data))
    }catch(err){
console.log(err.message);

    }
}

export const ProfileData=async(id)=>{
    console.log("first check",id);
    
    try{
const responsesingleData=await SecureRequest.get(`/rishiraj/getDatabaseData/${id}`)
console.log("final answer get in single data",responsesingleData.data);
return responsesingleData.data

    }catch(err){

    }
}

export const UpdateDatas=async(id,data)=>{
    try{
const UpdateInfo=await SecureRequest.put(`/rishiraj/updateData/${id}`,data)

    }catch(err){

    }

}

export const deleteDatas=async(id,dispatch)=>{
    try{
const response=await SecureRequest.delete(`/rishiraj/deleteDetails/${id}`)
console.log(response.data);
response.data ? dispatch(removedata()) : null
return response.data

    }catch(err){

    }
}