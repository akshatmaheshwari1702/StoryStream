import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { login, logout } from "../store/authSlice";
import { Header } from "../components";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";
import { themeChange } from "theme-change";

const Layout = () => {
  // Creating state for loader
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    themeChange(false);
  }, []);
  
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData) {
        dispatch(login({userData}))
      }
      else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [dispatch]);


  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between">
      <div className="w-full block">
        <Header />
        <main className="bg-base-200 p-4">
          <Outlet />
        </main>
        <Footer />
      </div>
      <ToastContainer />
    </div>
  ) : (
    <div className="flex justify-center content-center h-screen">
      <span className="loading loading-ring loading-lg"></span>
    </div>
  );
};

export default Layout;
