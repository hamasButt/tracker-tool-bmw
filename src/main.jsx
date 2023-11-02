import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import TrackerTool from "./tracker-tool";
import { createTheme, ThemeProvider } from "@mui/material";
import App from "./App";
import NoPageFound from "./components/ReuseableComps/NoPageFound";

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
  typography: {
    fontFamily: ["Ubuntu"].join(","),
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "tracker-tool",
        element: <TrackerTool />,
      },
      {
        path: "not-available",
        element: <NoPageFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
