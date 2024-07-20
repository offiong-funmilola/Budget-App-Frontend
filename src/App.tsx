import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/Home";
import Error from "./components/Error";
import Dashboard from "./components/dashBoard";
import Category from "./components/dashBoard/Category";
import { BudgetProvider } from "./components/context/BudgetContext";
import {RequestProvider} from './components/context/RequestContext';
import {UtilityProvider} from './components/context/UtilityContext'
import Income from "./components/dashBoard/Income";
import Summary from "./components/dashBoard/Summary";
import Saving from "./components/dashBoard/Saving";
import BaseDashboard from "./components/dashBoard/BaseDashboard";
import Analytics from "./components/dashBoard/Analytics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        index: true,
        element: <BaseDashboard />,
      },
      {
        path: "category",
        element: <Category />,
      },
      {
        path: "income",
        element: <Income />,
      },
      {
        path: "summary",
        element: <Summary />,
      },
      {
        path: "savings",
        element: <Saving />,
      },
      {
        path: "analytics",
        element: <Analytics />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <ToastContainer />
      <UtilityProvider>
      <RequestProvider>
      <BudgetProvider>
        <RouterProvider router={router} />
      </BudgetProvider>
      </RequestProvider>
      </UtilityProvider>
    </>
  );
}

export default App;
