import { useState } from 'react'
import './App.css'
import Root from '../src/routes/Root'
import Home from '../src/pages/Home/Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Projects3d from './pages/Projects3d/Projects3d'
import UIUXProjects from './pages/UIUXProjects/UIUXProjects'
import Projects from './pages/Projects3d/Projects/Projects'

function App() {
  const router = createBrowserRouter([
    {
      element: <Root />,
      children: [{
        path: '/',
        element: <Home />,
      },{
        path: 'Projects3d',
        element: <Projects3d />
      },
      {
        path: 'uiuxProjects',
        element: <UIUXProjects />
      },{
        path: 'Images',
        element: <Projects />
      },{
        path: 'Characters',
        element: <Projects />
      },{
        path: 'Animations',
        element: <Projects />
      },
      ]
    }
  ]);
  
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
