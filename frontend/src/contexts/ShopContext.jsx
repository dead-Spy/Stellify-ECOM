import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { products as demoProducts } from "../assets/frontend_assets/assets"; 

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const deliveryFee = 10;
  const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";
  
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState(demoProducts); 
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const navigate = useNavigate();

  const getProductsData = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setProducts(response.data.products);
      }
    } catch (error) {
      console.log("Backend not connected, using demo data");
      setProducts(demoProducts);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  const addToCart = async (itemId, size) => {
    if (!size) {
      return toast.error("Please select a size first");
    }
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) { cartData[itemId][size] += 1; }
      else { cartData[itemId][size] = 1; }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
    toast.success("Added to cart");
  };

  // এই ফাংশনটি আপনার মিসিং ছিল যা Cart.jsx এর জন্য বাধ্যতামূলক
  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) { totalCount += cartItems[items][item]; }
        } catch (error) {}
      }
    }
    return totalCount;
  };

  // CartTotal কম্পোনেন্টের জন্য এই ফাংশনটি লাগবে
  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalAmount;
  };

  const value = {
    products, currency, deliveryFee,
    search, setSearch, showSearch, setShowSearch,
    cartItems, setCartItems, addToCart, getCartCount,
    updateQuantity, getCartAmount, // এই দুটি এখানে যোগ করা হয়েছে
    navigate, backendUrl, token, setToken,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;