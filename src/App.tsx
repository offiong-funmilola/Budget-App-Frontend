import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Home from './components/Home'
import Error from './components/Error'
import { BudgetProvider } from './components/context/BudgetContext'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error /> 
  },
  {
    path: '/signup',
    element: <Signup />,
    errorElement: <Error /> 
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error /> 
  },
])


function App() {
  return (
    <>
      <BudgetProvider>
        <RouterProvider router={router}/>
      </BudgetProvider>
     
    </>
  )
}

export default App
