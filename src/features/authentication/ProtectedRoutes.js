import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

// receives component and any other props represented by ...rest

export const ProtectedRoutes = ({ children }) => {
  const token = cookies.get("TOKEN");
  if (!token) {
    return <Navigate to="/dass-coffee/login" replace />;
  }

  return children;
};
