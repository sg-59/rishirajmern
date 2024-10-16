import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Signuppage = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [mobile,setMobile]=useState(Number)
    const [password,setPassword]=useState('')

    function display(){
        console.log({name,email,mobile,password});
        axios.post("http://localhost:9000/rishiraj/postData",{name,email,mobile,password}).then((data)=>{
            console.log(data.data);
            
        })
    }

  return (
    <div>
        <input type="text" placeholder='username' onChange={(e)=>setName(e.target.value)}/>
        <input type="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
        <input type="number" placeholder='Mobile' onChange={(e)=>setMobile(e.target.value)}/>
        <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={display}>Signup</button>
        <Link to={'/profile'}>Profile</Link>
    </div>
  )
}

export default Signuppage