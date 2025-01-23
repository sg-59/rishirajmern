import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteDatas, ProfileData } from '../Api';
import { Link } from 'react-router-dom';
import { removedata } from '../Redux/loginslice';

function Profile() {
  const Localstoragevalue=useSelector((state)=>state.login.loginData) 
  console.log("local storage value",Localstoragevalue);
  const Id=Localstoragevalue?.userId
  const [state,setState]=useState()
  const [state1,setState1]=useState()

  const dispatch=useDispatch()

  useEffect(()=>{
ProfileData(Id).then((data)=>{
    console.log("profile page data",data);
    setState(data)
})
  },[])

  function clearData(){
    deleteDatas(Id,dispatch).then((data)=>{
setState1(data)
    })
    
    
   
 
  }


  return (
    <div>
    <img src={state?.image} alt="" />
      <h1>{state1}</h1>
      <h1>{state?.name}</h1>
      <h3>{state?.email}</h3>
      <h3>{state?.mobile}</h3>
     <Link to={'/update'}><button>Update</button></Link> 
     <button onClick={clearData}>Delete</button>
    </div>
  )
}

export default Profile
