import React from 'react'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'

import batLoaders from './loaders/batLoaders';
import Layouts from './compponents/Layouts';
import Home from './pages/Home';
import filmLoaders from './loaders/filmLoaders';
import Fim from './pages/Fim';
import Fimdetail from './pages/Fimdetail';
import filmId from './loaders/filmId';


const App = () => {

const router = createBrowserRouter([
  
  
  {
path:"/",
element:<Layouts/>,
children:[
  {path:'/', element:<Home/>,
    loader: batLoaders
  },
  {
   path:"Fim/",
   element:<Fim/>,
   loader: filmLoaders
  },
  {
    path:"/Fimdetail/:imdbID",
    element:<Fimdetail/>,
    loader:filmId
  }

  
]
}


]);

  return <RouterProvider router={router}/>;
}

export default App;