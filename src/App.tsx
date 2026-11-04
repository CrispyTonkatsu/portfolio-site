import { RouterProvider } from "react-router-dom";
import { router } from "./index.tsx";

// TODO: Get the everforest color scheme here and in the index.css
import 'highlight.js/styles/tokyo-night-dark.min.css'

export default function App() {
  // TODO: Consider renaming from "projects" to "experience" that way all the different things I have done can be in the same tab
  return <RouterProvider router={router} />
}
