import React, { useContext, useEffect } from "react";
import { ShopContext } from "../contexts/ShopContext";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

const Verify = () => {
  const { navigate, setCartItems, backendUrl, token } = useContext(ShopContext);
  const [searchParams] = useSearchParams();

  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const verifyPayment = async () => {
    try {
      if (!token) {
        return null;
      }

      const response = await axios.post(
        backendUrl + "/api/order/verifyStripe",
        { success, orderId },
        { headers: { token } }
      );

      if (response.data.success) {
        setCartItems({});
        navigate("/orders");
        toast.success("Authenticating successful! Your artifact is reserved.");
      } else {
        navigate("/cart");
        toast.error("Payment verification unsuccessful.");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      navigate("/cart");
    }
  };

  useEffect(() => {
    verifyPayment();
  }, [token]);

  return (
    <div className="bg-[#F9F7F4] min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center gap-8 max-w-md text-center"
      >
        {/* Modern Minimalist Loader */}
        <div className="relative flex items-center justify-center">
          <Loader2 className="w-16 h-16 text-[#2C261F] animate-spin stroke-[1px]" />
          <div className="absolute inset-0 border border-[#8D7B68]/20 rounded-full scale-150 animate-pulse"></div>
        </div>

        <div className="space-y-4">
          <p className="font-serif text-2xl md:text-3xl text-[#2C261F] italic tracking-wide">
            authenticating your request
          </p>
          
          <div className="h-[1px] w-12 bg-[#8D7B68]/40 mx-auto"></div>
          
          <p className="text-[10px] font-black tracking-[0.4em] text-[#8D7B68] uppercase">
            Securing your artifact reservation
          </p>
        </div>

        <p className="text-[9px] tracking-[0.2em] text-[#8D7B68]/60 uppercase italic">
          Please maintain connection. Do not refresh this terminal.
        </p>
      </motion.div>

      <style jsx>{`
        .font-serif { font-family: 'Prata', serif; }
      `}</style>
    </div>
  );
};

export default Verify;