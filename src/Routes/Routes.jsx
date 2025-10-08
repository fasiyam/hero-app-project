import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Pages/Root/Root';
import Apps from '../Pages/Apps/Apps';
import Installation from '../Pages/Installation/Installation';
import Home from '../Pages/Home/Home';

export const routes = createBrowserRouter(
  [
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
          Component: Apps,
        },
        {
          path: "/installation",
          Component: Installation,
        },
      ],
    },
  ]
);