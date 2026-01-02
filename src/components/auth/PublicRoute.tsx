import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface childrenPropType {
  children: ReactNode;
}

const PublicRoute = ({ children }: childrenPropType) => {
  const isAuth: boolean = JSON.parse(localStorage.getItem("isLogged") || "false");
  
  if (isAuth) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default PublicRoute