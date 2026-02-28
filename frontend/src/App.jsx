import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import SmoothScroll from "./components/SmoothScroll";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Lazy loading components
const Home = lazy(() => import("./pages/Home"));
const Collection = lazy(() => import("./pages/Collection"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Product = lazy(() => import("./pages/Product"));
const Cart = lazy(() => import("./pages/Cart"));
const Login = lazy(() => import("./pages/Login"));
const PlaceOrder = lazy(() => import("./pages/PlaceOrder"));
const Orders = lazy(() => import("./pages/Orders"));
const Verify = lazy(() => import("./pages/Verify"));

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh] bg-[#F9F7F4]">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-t-2 border-[#8D7B68] border-solid rounded-full animate-spin"></div>
      <p className="text-[10px] tracking-[0.5em] text-[#8D7B68] uppercase font-bold">Stellify Atelier</p>
    </div>
  </div>
);

const App = () => {
  return (
    //  using smoothScroll
    <SmoothScroll>
      <div className="min-h-screen bg-[#F9F7F4] selection:bg-[#2C261F] selection:text-white">
        <ToastContainer 
          position="bottom-right" 
          autoClose={3000}
          theme="light" 
          toastStyle={{ backgroundColor: "#F9F7F4", color: "#2C261F", border: "1px solid #8D7B68" }}
        />
        
        <Navbar />
        <SearchBar />
        
        <main className="relative z-10">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/product/:productId" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/place-order" element={<PlaceOrder />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/verify" element={<Verify />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default App;