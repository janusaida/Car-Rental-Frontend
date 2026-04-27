
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (role && role !== userRole) {
    return <Navigate to="/Bookings" />;
  }

  return children;
};

export default ProtectedRoute;
// import { Navigate } from "react-router-dom";


// const ProtectedRoute = ({ children, role }) => {
//   const token = localStorage.getItem("token");
//   const userRole = localStorage.getItem("role");

//   if (!token) {
//     return <Navigate to="/login" />;
//   }
 
//   if (user.role !== role) {
//     // redirect based on role
//     if (user.role === "ADMIN") return <Navigate to="/admin" />;
//     if (user.role === "USER") return <Navigate to="/user" />;
//   }

//   return children;
// }

// export default ProtectedRoute;