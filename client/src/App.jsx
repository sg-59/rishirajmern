import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Profile from "./Pages/Profile"
import Signuppage from "./Pages/Signuppage"
import Update from './Pages/Update'




function App() {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<Signuppage/>
    },
    {
      path:'/profile',
      element:<Profile/>
    },
    {
      path:'/update/:userid',
      element:<Update/>
    }

  ])


  return (
    <>
<RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
