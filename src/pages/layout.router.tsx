import React from 'react';
import { Navigate, type RouteObject } from 'react-router-dom'

const Help = React.lazy(() => import(/* webpackChunkName: "help" */ './help/Help'));
const About = React.lazy(() => import(/* webpackChunkName: "about" */'./about/About'));
const MainLayoutPage = React.lazy(() => import(/* webpackChunkName: "mainLayoutPage" */'./main-layout/MainLayoutPage'))

const layoutRouter: RouteObject[] = [
  {
    path: '/',
    Component: MainLayoutPage,
    element: <Navigate to="/help" />,
    children: [
      {
        path: '/help',
        Component: Help
      },
      {
        path: '/about',
        Component: About
      }
    ]
  }
]

export default layoutRouter
