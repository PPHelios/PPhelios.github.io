import { Navigate } from "react-router-dom";
import { useStore } from "../../store/useStore";
// receives component and any other props represented by ...rest

export const ProtectedRoutes = ({ children }) => {
// const user = useStore(state => state.user)
//   if (!user._id) {
//     return <Navigate to="/dass-coffee/login" replace />;
//   }

  return children;
};
