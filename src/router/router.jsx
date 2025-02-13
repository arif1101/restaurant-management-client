
import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import Shop from "../pages/Shop/shop";
import Gallery from "../pages/Gallery/Gallery";

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
        }
      ]
    },
]);

export default router;