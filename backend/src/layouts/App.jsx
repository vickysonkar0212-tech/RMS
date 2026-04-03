import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer"

const AppLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      navigate("/login", { replace: true });
      return;
    }
  }, [navigate]);

  const storedUser = localStorage.getItem("user");
  const hasToken = !!localStorage.getItem("accessToken");

  if (!hasToken) {
    return <div>Redirecting to login...</div>;
  }

  return (
    <>
      <div id="layout-wrapper">
        <header id="page-topbar">
          <div className="layout-width">
            <Navbar />
          </div>
        </header>
        <Sidebar />
        <div className="main-content">
          <div className="page-content">
            <Outlet/>
          </div>
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default AppLayout;

