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
import AllCategories from "./AllCategories";
import CategoryDetails from "./CategoryDetails";



const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async() => fetch('https://misty-mrittika.vercel.app/crafts')
      },
      {
        path: "/craftDetails/:id",
        element:( 
        <ProtectedRoute>
          <CraftDetails></CraftDetails>  
        </ProtectedRoute>
        ),
       },
      {
        path: "/allCraft",
        element: <AllCraft></AllCraft> ,   
        loader: () => fetch('https://misty-mrittika.vercel.app/crafts'),
      },
      {
        path: "/allCategories/:id",
        element: <AllCategories></AllCategories>,   
        loader: ({params}) => fetch(`https://misty-mrittika.vercel.app/allCategories/${params.id}`),
      },
      {
        path: "/categoryDetails/:id",
        element: <CategoryDetails></CategoryDetails>,   
        loader: ({params}) => fetch(`https://misty-mrittika.vercel.app/allCategories/${params.id}`),
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