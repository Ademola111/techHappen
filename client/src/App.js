import React from 'react'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import { Home } from './Components'
import './styles/global.css'

const App = () => {
    const router = createBrowserRouter([
      {  
        path : '/',
        element : <Home />
      },
      

    ])
  return (
    <>
        <main>
          <RouterProvider router={router}></RouterProvider>
        </main>
    </>
  )
}

export default App