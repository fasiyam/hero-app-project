import React, { Component } from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import Home from "../Pages/Home/Home";
import AppDetails from "../Pages/AppDetails/AppDetails";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import AppsNotFound from "../Components/AppsNotFound/AppsNotFound";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch("/trendingApps.json"),
        Component: Home,
      },
      {
        path: "/apps",
        loader: () => fetch("/allApps.json"),
        Component: Apps,
      },
      {
        path: "/installation",
        loader: () => fetch("/allApps.json"),
        Component: Installation,
      },
      {
        path: "/apps/:appId",
        loader: () => fetch("/allApps.json"),
        Component: AppDetails,
        errorElement: <AppsNotFound></AppsNotFound>
      },
      {
        path: "*",
        Component: PageNotFound,
      },
    ],
  },
]);
