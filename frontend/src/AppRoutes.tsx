import { Navigate, Route, Routes } from "react-router-dom";

import { Layout } from "@/layouts/layout";
import HomePage from "@/pages/home-page";
import AuthCallbackPage from "@/pages/auth-callback-page";
import UserProfilePage from "@/pages/user-profile-page";
import ProtectedRoute from "./auth/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route
        path="/"
        element={
          <Layout showHero>
            <HomePage />
          </Layout>
        }
      />
      <Route path="/auth-callback" element={<AuthCallbackPage />} />

      <Route element={<ProtectedRoute />}>
        <Route
          path="/user-profile"
          element={
            <Layout>
              <UserProfilePage />
            </Layout>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
