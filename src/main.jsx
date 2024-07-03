import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Browse from './pages/Browse.jsx'
import Signup from './pages/Signup.jsx'
import Error from './pages/Error.jsx'


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
  },
  {
    path:'/error',
    element:<Error/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <RouterProvider router={appRouter}>
      <App />
    </RouterProvider>
  </Provider>

)
