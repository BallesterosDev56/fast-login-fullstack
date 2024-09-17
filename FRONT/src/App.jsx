import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Register } from './assets/register/register';
import { Login } from './login/Login';

const routes = createBrowserRouter([
  {
    path: '/register',
    element: <Register></Register>
  }, 
  {
    path: '/login',
    element: <Login></Login>
  }
]);

function App() {

  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}

export default App
