import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Main from './layout/Main';
import Contact from './components/Contact/Contact';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/shop',
          loader: () => fetch('tshirts.json'),
          element: <Shop></Shop>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        }
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
