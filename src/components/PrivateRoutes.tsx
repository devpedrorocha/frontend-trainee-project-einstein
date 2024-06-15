import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/context/authContext';

export const PrivateRoute = ({ children }:  { children: React.ReactNode }) => {
  // const { isLoggedIn } = useAuth();

  if (false) {
    // Redirect them to the login page, but save the current location they were trying to go to
    return <Navigate to="/login" replace />;
  }

  return children;
};