import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../shared/Login/Login/Login";
import Register from "../shared/Login/Register/Register";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Contact from "../pages/Contact/Contact";
import Appointment from "../shared/Appointment/Appointment";
import PrivateRouter from "./PrivateRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/services",
        element: (
          <PrivateRouter>
            <Services></Services>
          </PrivateRouter>
        ),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/appointment/:id",
        element: (
          <PrivateRouter>
            <Appointment></Appointment>
          </PrivateRouter>
        ),
        loader: async ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
