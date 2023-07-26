import { createBrowserRouter } from "react-router-dom";
import { VendorsModule } from "../../vendors/vendors.module";
import { HomeModule } from "../../home/home.module";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeModule />,
  },
  {
    path: "/vendors",
    element: <VendorsModule />,
  },
  {
    path: "/vendor/:id",
    element: <>Not Found!</>,
  },
]);
