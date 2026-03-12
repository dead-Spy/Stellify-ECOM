import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/frontend_assets/assets";
import { ShopContext } from "../contexts/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { CreditCard, Truck, MapPin, User } from "lucide-react";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const { token } = useContext(ShopContext);
  const {
    navigate,
    backendUrl,
    cartItems,
    setCartItems,
    getCartAmount,
    deliveryFee,
    products,
  } = useContext(ShopContext);
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let orderItems = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items)
            );
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + deliveryFee,
      };

      switch (method) {
        case "cod":
          const response = await axios.post(
            backendUrl + "/api/order/place",
            orderData,
            { headers: { token } }
          );
          if (response.data.success) {
            setCartItems({});
            navigate("/orders");
            toast.success("Artifact Reserved Successfully");
          } else {
            toast.error(response.data.message);
          }
          break;
          
        case "stripe":
          const responseStripe = await axios.post(
            backendUrl + "/api/order/stripe",
            orderData,
            { headers: { token } }
          );
          if (responseStripe.data.success) {
            const { session_url } = responseStripe.data;
            window.location.replace(session_url);
          } else {
            toast.error(responseStripe.data.message);
          }
          break;

        default:
          break;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="bg-[#F9F7F4] min-h-screen pt-32 sm:pt-40 md:pt-48 pb-24 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          onSubmit={onSubmitHandler}
          className="flex flex-col lg:flex-row justify-between gap-20"
        >
          {/* Left Side: Shipping Atelier */}
          <div className="flex flex-col gap-10 w-full lg:max-w-[650px]">
            <div>
              <Title text1={"SHIPPING"} text2={"ATELIER"} />
              <p className="font-serif italic text-[#8D7B68] text-sm mt-3 tracking-wide opacity-80">
                Provide your details to receive your handcrafted artifacts.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-2">
                <User className="w-4 h-4 text-[#8D7B68]" />
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#2C261F] uppercase">Personal Information</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  required
                  className="w-full bg-white/50 border border-[#8D7B68]/10 py-4 px-5 rounded-xl outline-none focus:border-[#2C261F] focus:bg-white transition-all text-xs tracking-wider placeholder-[#8D7B68]/40"
                  type="text"
                  placeholder="First Name"
                  onChange={onChangeHandler}
                  name="firstName"
                  value={formData.firstName}
                />
                <input
                  required
                  className="w-full bg-white/50 border border-[#8D7B68]/10 py-4 px-5 rounded-xl outline-none focus:border-[#2C261F] focus:bg-white transition-all text-xs tracking-wider placeholder-[#8D7B68]/40"
                  type="text"
                  placeholder="Last Name"
                  onChange={onChangeHandler}
                  name="lastName"
                  value={formData.lastName}
                />
              </div>

              <input
                required
                className="w-full bg-white/50 border border-[#8D7B68]/10 py-4 px-5 rounded-xl outline-none focus:border-[#2C261F] focus:bg-white transition-all text-xs tracking-wider placeholder-[#8D7B68]/40"
                type="email"
                placeholder="Email Address"
                onChange={onChangeHandler}
                name="email"
                value={formData.email}
              />

              <div className="flex items-center gap-2 mt-8 mb-2">
                <MapPin className="w-4 h-4 text-[#8D7B68]" />
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#2C261F] uppercase">Destination Details</span>
              </div>
              
              <input
                required
                className="w-full bg-white/50 border border-[#8D7B68]/10 py-4 px-5 rounded-xl outline-none focus:border-[#2C261F] focus:bg-white transition-all text-xs tracking-wider placeholder-[#8D7B68]/40"
                type="text"
                placeholder="Street Address"
                onChange={onChangeHandler}
                name="street"
                value={formData.street}
              />

              <div className="grid grid-cols-2 gap-6">
                <input
                  required
                  className="w-full bg-white/50 border border-[#8D7B68]/10 py-4 px-5 rounded-xl outline-none focus:border-[#2C261F] focus:bg-white transition-all text-xs tracking-wider placeholder-[#8D7B68]/40"
                  type="text"
                  placeholder="City"
                  onChange={onChangeHandler}
                  name="city"
                  value={formData.city}
                />
                <input
                  required
                  className="w-full bg-white/50 border border-[#8D7B68]/10 py-4 px-5 rounded-xl outline-none focus:border-[#2C261F] focus:bg-white transition-all text-xs tracking-wider placeholder-[#8D7B68]/40"
                  type="text"
                  placeholder="State"
                  onChange={onChangeHandler}
                  name="state"
                  value={formData.state}
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <input
                  required
                  className="w-full bg-white/50 border border-[#8D7B68]/10 py-4 px-5 rounded-xl outline-none focus:border-[#2C261F] focus:bg-white transition-all text-xs tracking-wider placeholder-[#8D7B68]/40"
                  type="number"
                  placeholder="Zipcode"
                  onChange={onChangeHandler}
                  name="zipcode"
                  value={formData.zipcode}
                />
                <input
                  required
                  className="w-full bg-white/50 border border-[#8D7B68]/10 py-4 px-5 rounded-xl outline-none focus:border-[#2C261F] focus:bg-white transition-all text-xs tracking-wider placeholder-[#8D7B68]/40"
                  type="text"
                  placeholder="Country"
                  onChange={onChangeHandler}
                  name="country"
                  value={formData.country}
                />
              </div>

              <input
                required
                className="w-full bg-white/50 border border-[#8D7B68]/10 py-4 px-5 rounded-xl outline-none focus:border-[#2C261F] focus:bg-white transition-all text-xs tracking-wider placeholder-[#8D7B68]/40"
                type="tel"
                placeholder="Phone Number"
                onChange={onChangeHandler}
                name="phone"
                value={formData.phone}
              />
            </div>
          </div>

          {/* Right Side: Order Summary & Payment */}
          <div className="flex-1 lg:max-w-[450px]">
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] border border-[#8D7B68]/5">
              <CartTotal />
              
              <div className="mt-12">
                <div className="flex items-center gap-2 mb-6">
                  <CreditCard className="w-4 h-4 text-[#2C261F]" />
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#2C261F] uppercase">Select Payment</span>
                </div>

                <div className="space-y-3">
                  <div
                    onClick={() => setMethod("stripe")}
                    className={`group flex items-center justify-between p-5 cursor-pointer transition-all duration-300 rounded-2xl border ${
                      method === "stripe" ? "border-[#2C261F] bg-[#2C261F] text-white shadow-lg" : "border-[#8D7B68]/10 bg-[#F9F7F4]/50 hover:border-[#8D7B68]/30"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${method === "stripe" ? "border-white" : "border-[#8D7B68]"}`}>
                        {method === "stripe" && <div className="w-2 h-2 bg-white rounded-full"></div>}
                      </div>
                      <img className={`h-4 transition-all ${method === "stripe" ? "brightness-200" : "grayscale opacity-70"}`} src={assets.stripe_logo} alt="Stripe" />
                    </div>
                  </div>

                  <div
                    onClick={() => setMethod("cod")}
                    className={`group flex items-center justify-between p-5 cursor-pointer transition-all duration-300 rounded-2xl border ${
                      method === "cod" ? "border-[#2C261F] bg-[#2C261F] text-white shadow-lg" : "border-[#8D7B68]/10 bg-[#F9F7F4]/50 hover:border-[#8D7B68]/30"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${method === "cod" ? "border-white" : "border-[#8D7B68]"}`}>
                        {method === "cod" && <div className="w-2 h-2 bg-white rounded-full"></div>}
                      </div>
                      <p className={`text-[10px] font-bold tracking-[0.2em] uppercase ${method === "cod" ? "text-white" : "text-[#2C261F]"}`}>Cash On Delivery</p>
                    </div>
                    <Truck className={`w-4 h-4 ${method === "cod" ? "text-white" : "text-[#8D7B68]"}`} />
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: "#1A1714" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[#2C261F] text-[#F9F7F4] mt-10 py-5 rounded-2xl text-[11px] font-black tracking-[0.3em] uppercase shadow-2xl transition-all"
                >
                  Complete Order
                </motion.button>
                
                <p className="text-[9px] text-center mt-6 text-[#8D7B68] tracking-widest uppercase opacity-60 flex items-center justify-center gap-2">
                  <span className="w-4 h-[1px] bg-[#8D7B68]/30"></span> Secure Checkout <span className="w-4 h-[1px] bg-[#8D7B68]/30"></span>
                </p>
              </div>
            </div>
          </div>
        </motion.form>
      </div>
      <style jsx>{`
        .font-serif { font-family: 'Prata', serif; }
      `}</style>
    </div>
  );
};

export default PlaceOrder;