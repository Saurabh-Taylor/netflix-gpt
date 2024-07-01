import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Browse from '../pages/Browse'
import Login from '../pages/Login'

import Signup from "../pages/Signup";

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login/>,
        },
        {
            path: '/browse',
            element: <Browse/>,
        },
        {
          path: '/signup',
          element: <Signup/>,
        }
    ])

  return (
    <RouterProvider router={appRouter} />
  )
}

export default Body