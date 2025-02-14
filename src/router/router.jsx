
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