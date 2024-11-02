import React from 'react'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'

import batLoaders from './loaders/batLoaders';
import Layouts from './compponents/Layouts';
import Home from './pages/Home';


const App = () => {

const router = createBrowserRouter([
  
  
  {
path:"/",
element:<Layouts/>,
children:[
  {path:'/', element:<Home/>,
    loader: batLoaders
  }

  
]
}


]);

  return <RouterProvider router={router}/>;
}

export default App;