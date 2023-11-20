import React from 'react'
import {createBrowserRouter} from 'react-router-dom'
import HomeFile from './HomeFile'
import LoginFile from './LoginFile'
import { RouterProvider } from 'react-router'
import ShopFile from './ShopFile'
import CartFile from './CartFile'
import ErrorFile from './ErrorFile'

const RouterFile = () => {
  const appRouter = createBrowserRouter([
    {
      path:'/',
      element: <HomeFile/>,
      errorElement:<ErrorFile/>

    },
    {
      path:'/login',
      element:<LoginFile/>,
      errorElement:<ErrorFile/>
    },
    {
      path:'/shop',
      element:<ShopFile/>
    },
    {
      path:'/cart',
      element:<CartFile/>,
      // errorElement:<Error/>
    }
  ])
  return (
    <RouterProvider router={appRouter}></RouterProvider>
  )
}

export default RouterFile