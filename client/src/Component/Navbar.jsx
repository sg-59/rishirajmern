import React from 'react'
import { useDispatch } from 'react-redux'
import {styled} from 'styled-components'
import { removedata } from '../Redux/loginslice'
import { Link } from 'react-router-dom'

const Nav=styled.div`
    width: 100%;
    height: 55px;
    background-color: lightblue;
    display: flex;
    align-items: center;
    justify-content: space-around;

`
const Title=styled.h3`
    font-size: 14px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: black;
    cursor: pointer;
`

function Navbar() {
    const dispatch=useDispatch()
    function display(){
dispatch(removedata())
    }
  return (
    <Nav>
    <Link to={'/profile'}><Title>Profile</Title></Link>  
      <Title>Cart</Title>
      <Title>About</Title>
      <Title>Order</Title>
      <Title onClick={display}>Logout</Title>
    </Nav>
  )
}

export default Navbar
