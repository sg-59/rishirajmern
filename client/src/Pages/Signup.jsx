import React, { useState } from 'react'
import { signupData } from '../Api'
import { Link } from 'react-router-dom'

const Signup = () => {

  const[name,setName]=useState(String)
  const[email,setEmail]=useState(String)
  const[mobile,setMobile]=useState(Number)
  const[password,setPassword]=useState(String)

  function display(){
    signupData({name,email,mobile,password})
  }

  return (
    <div>
      <input type="text" placeholder='name' onChange={(e)=>setName(e.target.value)}/>
      <input type="text" placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
      <input type="text" placeholder='mobile' onChange={(e)=>setMobile(e.target.value)}/>
      <input type="text" placeholder='password' onChange={(e)=>setPassword(e.target.value)} />
      <button onClick={display}>Submit</button>
<Link to={'/'}>I have already account ?</Link>
    </div>
  )
}

export default Signup