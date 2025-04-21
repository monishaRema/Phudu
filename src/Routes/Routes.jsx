import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home";
import MyBookings from "../Pages/MyBookings";
import Blog from "../Pages/Blog";
import Contact from "../Pages/Contact";
import Error from "../Pages/Error";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", 
        index: true,
        hydrateFallbackElement:<p>Loading, Please wait.. </p>,
        loader: () => fetch("doctors.json"),
         Component: Home },
      { path: "/my-bookings", Component: MyBookings },
      { path: "/blogs", Component: Blog },
      { path: "/contact", Component: Contact },
    ],
  },
]);
