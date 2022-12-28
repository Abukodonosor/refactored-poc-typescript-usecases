import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = ({
  isAllowed, // idea is to use this as expression for
  redirectPath = '/landing',
  children,
}: any) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? children : <Outlet />;
};

/**
 * 
  <Route element={<ProtectedRoute user={user} />}>
    <Route path="home" element={<Home />} />
    <Route path="dashboard" element={<Dashboard />} />
  </Route>
 * 
 * 
 */

/**
       * 
       * 
       * 
       *  <Route
        path="admin"
        element={
          <ProtectedRoute
            redirectPath="/home"
            isAllowed={!!user && user.roles.includes('admin')}
          >
            <Admin />
          </ProtectedRoute>
        }
        */
