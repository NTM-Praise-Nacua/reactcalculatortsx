import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom'

interface childrenPropType {
  children: ReactNode
}

const ProtectedRoute = ({ children }: childrenPropType) => {
  const isAuth: boolean = JSON.parse(localStorage.getItem("isLogged") || "false");
  
  console.log("isAuth Type: ", typeof isAuth);

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute