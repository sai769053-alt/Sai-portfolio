import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import PortfolioPage from "./components/Portfolio/PortfolioPage";
import Navbar from "./components/Layout/Navbar";
import { useAuthState } from "./context/AuthContext";

function RequireAuth({ children }) {
  const { user } = useAuthState();
  if (!user) return <Navigate to="/login" replace />;
  return children;
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/portfolio" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/portfolio"
          element={
            <RequireAuth>
              <PortfolioPage />
            </RequireAuth>
          }
        />
        <Route path="*" element={<div style={{ padding: 40 }}>404 Not Found</div>} />
      </Routes>
    </>
  );
}
