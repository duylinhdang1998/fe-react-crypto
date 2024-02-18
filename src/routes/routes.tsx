import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "~/layout/Layout";
import PageNotFound from "~/pages/PageNotFound/PageNotFound";
import { ROUTE_PATH } from "./route.constants";
import Dashboard from "~/pages/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    id: "root",
    Component: Layout,
    errorElement: (
      <Suspense fallback={null}>
        <PageNotFound />
      </Suspense>
    ),
    path: "/",
    children: [
      {
        // path: ROUTE_PATH.DASHBOARD,
        element: <Dashboard />,
        index: true,
      },
    ],
  },
]);

export default router;
