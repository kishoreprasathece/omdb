
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import movieLoaders from './loaders/movieLoader';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      loader: movieLoaders
    }
  ]);

  return <RouterProvider router={router} />;
};

export default App;
