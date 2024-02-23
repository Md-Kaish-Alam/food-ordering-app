import { Navigate, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/" element={<span>Home Page</span>} />
      <Route path="/user-profile" element={<span>User Profile Page</span>} />
    </Routes>
  );
};

export default AppRoutes;
