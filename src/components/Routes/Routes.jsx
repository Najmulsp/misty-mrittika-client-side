import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Layouts/ErrorPage";
import Root from "../Layouts/Root";
import Home from "./Home";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import AddCraft from "../PrivetRoutes/AddCraft";
import MyCraftList from "../PrivetRoutes/MyCraftList";
import ProtectedRoute from "../PrivetRoutes/ProtectedRoute";
import UpdateMyCraft from "../PrivetRoutes/UpdateMyCraft";
import AllCraft from "./AllCraft";
import CraftDetails from "../PrivetRoutes/CraftDetails";



const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async() => fetch('http://localhost:5000/crafts')
      },
      {
        path: "/craftDetails/:id",
        element:( 
        <ProtectedRoute>
          <CraftDetails></CraftDetails>  
        </ProtectedRoute>
        ),
      //   loader: ({params}) => fetch(`http://localhost:5000/crafts/${params.id}`),
       },
      {
        path: "/allCraft",
        element: <AllCraft></AllCraft> ,   
        loader: () => fetch('http://localhost:5000/crafts'),
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
      path: "/myCraftList",
      element: (
        <ProtectedRoute>
          <MyCraftList></MyCraftList>
          </ProtectedRoute>
      ),
    },
    {
      path: "/updateMyCraft/:id",
      element: (
        <ProtectedRoute>
          <UpdateMyCraft></UpdateMyCraft>
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