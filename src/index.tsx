import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import SpecializedLanding from "./components/SpecializedLanding";
import ProjectsPage from "./pages/ProjectsPage";

import { lazy, Suspense } from "react";
const MarkdownReader = lazy(() => import("./pages/MarkdownReader"))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <SpecializedLanding />
      },
      {
        path: 'landing/:type',
        element: <SpecializedLanding />
      },
      {
        path: 'projects',
        element: <ProjectsPage />
      },
      {
        path: 'blog',
        element: <Blog />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'markdown/:type/:file',
        element: (
          <Suspense fallback={
            <div className="flex justify-center items-center py-20">
              <span className="loading loading-spinner loading-lg text-primary" />
            </div>
          }>
            <MarkdownReader />
          </Suspense>
        )
      }
    ],
  },
]);
