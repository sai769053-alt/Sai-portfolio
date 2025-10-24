import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "../../context/AuthContext";
import ThemeToggle from "../ThemeToggle";

export default function Navbar() {
  const { user } = useAuthState();
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
    window.location.reload();
  }

  return (
    <header className="nav">
      <Link to="/" className="brand">Sai Portfolio</Link>
      <div className="nav-right">
        <ThemeToggle />
        {user ? (
          <>
            <button className="btn-ghost" onClick={() => navigate("/portfolio")}>Portfolio</button>
            <button className="btn-ghost" onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn-ghost">Login</Link>
            <Link to="/signup" className="btn-primary">Sign Up</Link>
          </>
        )}
      </div>
    </header>
  );
}
