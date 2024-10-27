import React from 'react'
import { useDispatch } from 'react-redux'
import { removedata } from '../Redux/loginslice'

const Home = () => {
const dispatch=useDispatch()
    function display(){
dispatch(removedata())
    }

  return (
    <div>
        <h1>Home</h1>
        <button onClick={display}>Logout</button>
    </div>
  )
}

export default Home