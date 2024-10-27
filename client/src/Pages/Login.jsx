import React, { useState } from 'react'
import { loginData } from '../Api'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const Login = () => {

    const dispatch=useDispatch()
    
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    function display(){
        loginData({email,password},dispatch)
    }

  return (
    <div>
        <input type="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder='password'  onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={display}>Login</button>
        <Link to={'/signup'}>Create an account ?</Link>
    </div>
  )
}

export default Login