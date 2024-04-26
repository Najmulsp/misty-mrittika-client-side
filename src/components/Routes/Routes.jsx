import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Layouts/ErrorPage";
import Root from "../Layouts/Root";
import Home from "./Home";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import AddCraft from "../PrivetRoutes/AddCraft";
import MyCraftList from "../PrivetRoutes/MyCraftList";
import ProtectedRoute from "../PrivetRoutes/ProtectedRoute";


// import Properties from "../PrivetRoute/Properties";
// import ProtectedProperty from "../PrivetRoute/ProtectedProperty";
// import ProtectedProfile from "../PrivetRoute/ProtectedProfile";
// import ContactUs from "./ContactUs";
// import ProtectedAgents from "../PrivetRoute/ProtectedAgents";


const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/Estate.json"),
      },
    //   {
    //     path: "/estate/:id",
    //     loader: () => fetch(`/Estate.json`),
    //     element: (
    //       <ProtectedProperty>
    //         <Properties></Properties>
    //       </ProtectedProperty>
    //     ),
    //   },
    //   {
    //     path: "/contact",
    //     element: <ContactUs></ContactUs>,
    //   },
    {
      path: "/myCraftList",
      element: (
        <ProtectedRoute>
          <MyCraftList></MyCraftList>
          </ProtectedRoute>
      ),
    },
    
    {
      path: "/addCraft",
      element: (
        <ProtectedRoute>
          <AddCraft></AddCraft>
         </ProtectedRoute>
      ),
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
export default router;