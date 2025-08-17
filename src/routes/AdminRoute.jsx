import { Outlet, Navigate } from "react-router-dom";

const AdminRoute = () => {
  const token = localStorage.getItem("token");

  // Token yoxdursa adminə daxil olmur
  if (!token) {
    return <Navigate to="/" />;
  }

  return <Outlet />; // nested route-lar burada göstəriləcək
};

export default AdminRoute;
