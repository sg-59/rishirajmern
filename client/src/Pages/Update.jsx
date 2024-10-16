import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Update = () => {

  const id=useParams()

  const [name,setName]=useState()
  const [email,setEmail]=useState()
  const [mobile,setMobile]=useState()
  const [password,setPassword]=useState()

  const [message,setMessage]=useState('')

  console.log("Id ?",id.userid);

  function update(){
    axios.put(`http://localhost:9000/rishiraj/updateData/${id.userid}`,{name,email,mobile,password}).then((data)=>{
console.log(data.data);
setMessage(data.data.message)
    }).catch((err)=>{
console.log(err);

    })
  }
  
  return (
    <div>
      <input type="text" placeholder='name' onChange={(e)=>setName(e.target.value)}/>
      <input type="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
      <input type="number" placeholder='mobile' onChange={(e)=>setMobile(e.target.value)}/>
      <input type="password"  placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={update}>Submit</button>
      <h3>{message}</h3>
    </div>
  )
}

export default Update