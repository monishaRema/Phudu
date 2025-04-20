import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";


export const Routes = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
      
    }
])