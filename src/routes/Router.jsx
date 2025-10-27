import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/common/loading/Loading";

const Home = lazy(() => import("../pages/Home"));
const Main = lazy(() => import("../layouts/Main"));
const QuickSurvey = lazy(() => import("../pages/Quick_Survey"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <Main />
      </Suspense>
    ),
    children: [
      {
        index: true, // use index instead of repeating path "/"
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "quicksurvey", // no need for leading slash inside children
        element: (
          <Suspense fallback={<Loading />}>
            <QuickSurvey />
          </Suspense>
        ),
      },
    ],
  },
]);
