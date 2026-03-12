import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contexts/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const { token, navigate, backendUrl, setToken } = useContext(ShopContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onSumbitHandler = async (e) => {
    e.preventDefault();
    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          toast.success("Welcome to the Atelier!");
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          navigate("/");
          toast.success("Welcome back to Stellify!");
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div className="bg-[#F9F7F4] min-h-screen pt-32 md:pt-48 pb-20 px-6">
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        onSubmit={onSumbitHandler}
        className="flex flex-col items-center w-full max-w-[450px] m-auto gap-8 text-[#2C261F] bg-white p-10 md:p-16 border border-[#8D7B68]/10 shadow-[0_40px_100px_rgba(0,0,0,0.03)] relative"
      >
        {/* Detail */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-[#8D7B68]/30"></div>

        <div className="flex flex-col items-center gap-4 mb-4">
          <p className="font-serif text-4xl tracking-widest lowercase italic text-[#2C261F]">
            {currentState === "Sign Up" ? "join us" : "welcome back"}
          </p>
          <div className="h-[1px] w-8 bg-[#8D7B68]/40"></div>
          <p className="text-[9px] tracking-[0.5em] text-[#8D7B68] uppercase font-black opacity-60">
            Stellify Member Access
          </p>
        </div>

        <div className="w-full flex flex-col gap-5">
          <AnimatePresence mode="wait">
            {currentState === "Sign Up" && (
              <motion.input
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="w-full px-5 py-4 border-b border-[#8D7B68]/20 bg-transparent outline-none focus:border-[#2C261F] transition-all duration-500 text-[11px] tracking-[0.2em] uppercase placeholder-[#8D7B68]/40"
                type="text"
                placeholder="Full Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            )}
          </AnimatePresence>
          
          <input
            className="w-full px-5 py-4 border-b border-[#8D7B68]/20 bg-transparent outline-none focus:border-[#2C261F] transition-all duration-500 text-[11px] tracking-[0.2em] uppercase placeholder-[#8D7B68]/40"
            type="email"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          
          <input
            className="w-full px-5 py-4 border-b border-[#8D7B68]/20 bg-transparent outline-none focus:border-[#2C261F] transition-all duration-500 text-[11px] tracking-[0.2em] uppercase placeholder-[#8D7B68]/40"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>

        <div className="w-full flex justify-between text-[9px] tracking-[0.2em] uppercase text-[#8D7B68] font-bold">
          <p className="cursor-pointer hover:text-[#2C261F] transition-colors border-b border-transparent hover:border-[#2C261F]">Forgot Password?</p>
          {currentState === "Sign Up" ? (
            <p
              onClick={() => setCurrentState("Login")}
              className="cursor-pointer text-[#2C261F] border-b border-[#2C261F] pb-0.5"
            >
              Login Here
            </p>
          ) : (
            <p
              onClick={() => setCurrentState("Sign Up")}
              className="cursor-pointer text-[#2C261F] border-b border-[#2C261F] pb-0.5"
            >
              Create account
            </p>
          )}
        </div>

        <motion.button 
          whileHover={{ scale: 1.01, backgroundColor: "#4A4238" }}
          whileTap={{ scale: 0.99 }}
          className="w-full bg-[#2C261F] text-[#F9F7F4] font-black tracking-[0.4em] px-8 py-5 mt-6 uppercase shadow-xl transition-all duration-500 rounded-[2px]"
        >
          {currentState === "Sign Up" ? "Register" : "Sign In"}
        </motion.button>
      </motion.form>

      <style jsx>{`
        .font-serif { font-family: 'Prata', serif; }
      `}</style>
    </div>
  );
};

export default Login;