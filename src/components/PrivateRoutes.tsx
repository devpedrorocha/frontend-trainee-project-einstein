import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/context/authContext';

export const PrivateRoute = ({ children }:  { children: React.ReactNode }) => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
};