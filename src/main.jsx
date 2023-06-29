import React from 'react'
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";

import App from './App.jsx'
import './index.css'
import Contact from "./Components/Contact";
import Home from "./Pages/Home";
import { ThemeProvider } from "@material-tailwind/react";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "contact",
        element: <Contact />
    },
]);

createRoot(document.getElementById("root")).render(
    <ThemeProvider>
    <RouterProvider router={router} />
    </ThemeProvider>
);
