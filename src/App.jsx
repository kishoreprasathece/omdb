import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import movieLoaders from './loaders/movieLoader';
import Film from './pages/Film';
import filmLoader from './loaders/filmLoader';


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      loader: movieLoaders
    },

{

 path:"/Film" ,
 element:<Film/>,
loader: filmLoader
}
  ]);

  return <RouterProvider router={router} />;
};

export default App;