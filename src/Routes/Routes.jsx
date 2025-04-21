import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home";
import MyBookings from "../Pages/MyBookings";
import Blog from "../Pages/Blog";
import Error from "../Pages/Error";
import Doctor from "../Components/Doctor";
import DocotorCard from "../Components/DocotorCard";

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
      {
        path: "doctor/:id",
        loader: () => fetch("doctors.json"),
        Component: DocotorCard
      }
    ],
  },
]);
