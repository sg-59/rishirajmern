import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import { useSelector } from 'react-redux'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import Update from './Pages/Update'

function App() {

  const logindata=useSelector((state)=>state.login.loginData)

  console.log("logindata in app.jsx",logindata);
  

  const router=createBrowserRouter([
{
  path:"/",
  element:logindata?.jwtToken? <Home/> : <Login/>
},
{
  path:"/signup",
  element:<Signup/>
},
{
  path:'/profile',
  element:logindata?.jwtToken? <Profile/> : <Login/>
},
{
  path:"/update",
  element:logindata?.jwtToken? <Update/> : <Login/>
}
  ])


  return (
    <>
<RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
