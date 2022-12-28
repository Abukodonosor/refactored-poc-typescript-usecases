import React from 'react';
import { Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';

// BarChart closure registration of components
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  BarController,
  PieController,
} from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, ArcElement, BarController, PieController);

// Newly refactored pages
import {
  MonitoringPage,
  MonitoringDetailsPage,
  DashboardPage,
  HelpPage,
  LoginPage,
  SearchPage,
  NotFoundPage,
  UserSettingsPage,
  StatisticsPage,
  ReportsPage,
} from './elements/pages';
import { WebsiteBars } from './elements/layout';

export const EdpemApp = () => {
  return <RouterProvider router={routes} />;
};

/**
 * Documentation: https://reactrouter.com/en/main/start/overview#nested-routes
 *
 *
 */

const routes = createBrowserRouter([
  {
    path: 'login',
    element: <LoginPage />,
    // errorElement: <>We need to develop error component! Ooooops! Something went wrong!</>
  },
  {
    path: '/',
    // Wrap the websiteBars with protectedRoute or ProtectedLayout Component
    // Purpose of this component is to 'check' if user is logged or not, after success check => redirect user to specific page
    // ps: In most cases the check will be to ask if user have auth token (JWT) from 'keycloak'
    element: <WebsiteBars />,
    children: [
      {
        path: '/dashboard',
        element: <DashboardPage />,
      },
      {
        path: '/monitoring/vessel',
        // modify when its rdy: /monitoring/tenants/{tenantid}/views/{viewid}/data-objects
        element: <MonitoringPage />,
        loader: () => {
          return null;
        },
      },
      {
        path: '/monitoring/inbox',
        element: <MonitoringPage />,
        loader: () => {
          return null;
        },
      },
      {
        path: '/monitoring/:table/details/:tableId',
        // modify when its rdy: /monitoring/tenants/{tenantid}/views/{viewid}/data-objects/{data-objectid}
        element: <MonitoringDetailsPage />,
        loader: () => {
          return null;
        },
      },
      {
        path: '/settings',
        element: <UserSettingsPage />,
        loader: () => {
          return null;
        },
      },
      {
        path: '/search/tenants/:tenantId',
        element: <SearchPage />,
        loader: () => {
          return null;
        },
      },
      {
        path: '/statistics',
        element: <StatisticsPage />,
        loader: () => {
          return null;
        },
      },
      {
        path: '/reports',
        element: <ReportsPage />,
        loader: () => {
          return null;
        },
      },
      {
        path: '/help',
        element: <HelpPage />,
        loader: () => {
          return null;
        },
      },
      /// Add more routes
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
