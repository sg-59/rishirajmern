import React, { useState } from 'react'
import { UpdateDatas } from '../Api'
import { useSelector } from 'react-redux';

function Update() {
    const Localstoragevalue=useSelector((state)=>state.login.loginData) 
    console.log("local storage value",Localstoragevalue);
    const Id=Localstoragevalue?.userId


    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [mobile,setMobile]=useState()
    const [password,setPassword]=useState()

function display(){
    UpdateDatas(Id,{name,email,mobile,password})
}

  return (
    <div>
    <input type="text" placeholder='name' onChange={(e)=>setName(e.target.value)}/>
    <input type="text" placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
    <input type="text" placeholder='mobile' onChange={(e)=>setMobile(e.target.value)}/>
    <input type="text" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
    <button onClick={display}>Update</button>
    </div>
  )
}

export default Update
{}