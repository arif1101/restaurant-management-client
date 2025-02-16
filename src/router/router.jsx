
import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import Shop from "../pages/Shop/shop";
import Gallery from "../pages/Gallery/Gallery";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Foods from "../pages/Foods/Foods";
import FoodDetails from "../pages/FoodDetails/FoodDetails";
import PrivateRoute from "./PrivateRoute";
import MyOrders from "../pages/MyOrders/MyOrders";
import AddFood from "../pages/AddFood/AddFood";
import MyFoods from "../pages/MyFoods/MyFoods";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: '/',
          element:<Home></Home>
        },
        {
          path: '/foods',
          element: <Foods></Foods>
        },
        {
          path: '/foods/:id',
          element: <PrivateRoute><FoodDetails></FoodDetails></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
        },
        {
          path: '/myOrders',
          element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>
        },
        {
          path: '/myFoods',
          element: <PrivateRoute><MyFoods></MyFoods></PrivateRoute>
        },
        {
          path: '/addFood',
          element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/shop',
          element: <Shop></Shop>
        },
        {
          path: '/gallery',
          element: <Gallery></Gallery>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    },
]);

export default router;