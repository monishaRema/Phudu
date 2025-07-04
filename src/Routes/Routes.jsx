import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home";
import MyBookings from "../Pages/MyBookings";
import Blog from "../Pages/Blog";
import Error from "../Pages/Error";

import DoctorCard from "../Components/DoctorCard";
import Spinner from "../Components/Spinner";
import ErrorDoctor from "../Components/ErrorDoctor";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    hydrateFallbackElement: <Spinner></Spinner>,
    children: [
      {
        path: "/",
        index: true,
        hydrateFallbackElement: <Spinner></Spinner>,
        loader: async () => {
          const res = await fetch("/doctors.json");
          return res.json();
        },
        Component: Home,
      },
      {
        path: "/my-bookings",
        loader: async () => {
          const res = await fetch("/doctors.json");
          return res.json();
        },
        Component: MyBookings,
      },
      { path: "/blogs",
        hydrateFallbackElement: <Spinner></Spinner>,
        loader: async () => {
          const res = await fetch("/questionary.json");
          return res.json();
        },
        Component: Blog },
      {
        path: "/doctor/:id",
        errorElement: <ErrorDoctor></ErrorDoctor>,
        loader: async () => {
          const res = await fetch("/doctors.json");
          return res.json();
        },
        Component: DoctorCard,
      },
    ],
  },
]);
