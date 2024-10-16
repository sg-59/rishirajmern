import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './profile.css'
import { Link } from 'react-router-dom'
const Profile = () => {

    const [state,setState]=useState([])
    const [message,setMessage]=useState('')

    useEffect(()=>{
axios.get('http://localhost:9000/rishiraj/getDatabaseData').then((data)=>{
    console.log("backend response",data.data);
    setState(data.data)
})
    },[])  
    
    
    function removeData(id){
axios.delete(`http://localhost:9000/rishiraj/deleteDetails/${id}`).then((data)=>{
  console.log(data.data);
  setMessage(data.data)

})
    }

  return (
    <div>
      
        <>
      <table>
        <tr>
        <th>Name</th>
<th>Email</th>
<th>Mobile</th>
<th>Password</th>
<th>update</th>
<th>Delete</th>

        </tr>
        {state.map((li)=>(
        <tr>
          <td>{li.name}</td>
          <td>{li.email}</td>
          <td>{li.mobile}</td>
          <td>{li.password}</td>
         <Link to={`/update/${li._id}`}><td><button>Update</button></td></Link> 
          <td><button onClick={()=>removeData(li._id)}>Delete</button></td>
        </tr>
      ))}
      </table>
        </>
      <h1>{message}</h1>
      <Link to={'/'}>Signup page</Link>
    </div>
  )
}

export default Profile