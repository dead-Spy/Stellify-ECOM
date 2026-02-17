import React, { useState, useEffect, Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";

const Add = lazy(() => import("./pages/Add"));
const List = lazy(() => import("./pages/List"));
const Orders = lazy(() => import("./pages/Orders"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Collections = lazy(() => import("./pages/Collections"));
const Coupons = lazy(() => import("./pages/Coupons"));
const Reviews = lazy(() => import("./pages/Testimonials"));
const Clients = lazy(() => import("./pages/Clients"));
const Messages = lazy(() => import("./pages/Messages"));
const Performance = lazy(() => import("./pages/Performance"));
const Shipping = lazy(() => import("./pages/Shipping"));
const Settings = lazy(() => import("./pages/Settings"));

export const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const currency = "$";

const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  const LoadingFallback = () => (
    <div className="flex items-center justify-center min-h-[60vh] w-full">
      <div className="w-8 h-8 border-2 border-[#8D7B68]/20 border-t-[#2C261F] rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="bg-[#F9F7F4] min-h-screen font-sans selection:bg-[#8D7B68]/10 overflow-hidden">
      <ToastContainer 
        position="bottom-right" 
        autoClose={3000} 
        theme="light"
        toastStyle={{ borderRadius: '16px', fontSize: '12px', fontWeight: 'bold', letterSpacing: '1px' }}
      />

      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <div className="flex flex-col h-screen overflow-hidden">
          <div className="shrink-0 z-50">
            <Navbar setToken={setToken} />
          </div>
          
          <div className="flex flex-1 overflow-hidden">
            <Sidebar />

            <main className="flex-1 overflow-y-auto scroll-smooth">
              <div className="max-w-6xl mx-auto px-6 md:px-12 py-10">
                <Suspense fallback={<LoadingFallback />}>
                  <Routes>
                    <Route path="/" element={<Navigate to="/add" replace />} />
                    <Route path="/add" element={<Add token={token} />} />
                    <Route path="/list" element={<List token={token} />} />
                    <Route path="/orders" element={<Orders token={token} />} />
                    <Route path="*" element={<Navigate to="/add" replace />} />
                    <Route path="/dashboard" element={<Dashboard token={token} />} />
                    <Route path="/collections" element={<Collections token={token} />} />
                    <Route path="/coupons" element={<Coupons token={token} />} />
                    <Route path="/reviews" element={<Reviews token={token} />} />
                    <Route path="/clients" element={<Clients token={token} />} />
                    <Route path="/messages" element={<Messages token={token} />} />
                    <Route path="/analytics" element={<Performance token={token} />} />
                    <Route path="/shipping" element={<Shipping token={token} />} />
                    <Route path="/settings" element={<Settings token={token} />} />
                  </Routes>
                </Suspense>
              </div>
            </main>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;