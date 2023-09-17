import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../Providers/AuthProvider';

function ProtectedRoute({children}) {
    const {isAuthenticated } = useAuth();


    return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
    
  // return (
  //   <Route
  //     {...rest}
  //     element={
  //       isAuthenticated ? <><Component /></> : <Navigate to="/login" replace={true} />
  //     }
  //   />
  // )
}

export default ProtectedRoute