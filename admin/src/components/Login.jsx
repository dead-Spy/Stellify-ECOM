import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Lock, Mail, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (email === "admin@test.com" && password === "admin123") {
        const fakeToken = "demo-access-token-12345";
        setToken(fakeToken);
        localStorage.setItem('token', fakeToken); 
        toast.success("Welcome to the Atelier Archive");
      } else {
        toast.error("Invalid credentials. Use admin@test.com / admin123");
      }
    } catch (error) {
      toast.error("An error occurred during access authorization.");
    }
  };

  useEffect(() => {
    setEmail("admin@test.com");
    setPassword("admin123");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center w-full bg-[#F9F7F4] p-4 font-sans">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 rounded-[40px] px-10 py-12 w-full max-w-md relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1.5 bg-[#2C261F]" />
        
        <div className="flex flex-col items-center mb-10">
          <div className="w-16 h-16 bg-[#F9F7F4] rounded-2xl flex items-center justify-center mb-6 border border-slate-50 shadow-inner">
            <ShieldCheck size={32} strokeWidth={1.5} className="text-[#8D7B68]" />
          </div>
          <h1 className="text-3xl font-serif text-[#2C261F] tracking-tight mb-2">Atelier Access</h1>
          <p className="text-[10px] font-black tracking-[0.4em] uppercase text-slate-400">Secure Administrative Portal</p>
        </div>

        <form onSubmit={onSubmitHandler} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[11px] font-black tracking-widest text-slate-400 uppercase ml-1">Identity (Email)</label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#8D7B68] transition-colors" size={18} />
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-[#F9F7F4] border-none rounded-2xl text-sm focus:ring-1 focus:ring-[#8D7B68] outline-none transition-all placeholder:text-slate-300 font-medium"
                type="email"
                placeholder="admin@test.com"
                value={email}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[11px] font-black tracking-widest text-slate-400 uppercase ml-1">Access Key (Password)</label>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#8D7B68] transition-colors" size={18} />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-[#F9F7F4] border-none rounded-2xl text-sm focus:ring-1 focus:ring-[#8D7B68] outline-none transition-all placeholder:text-slate-300 font-medium"
                type="password"
                placeholder="••••••••"
                value={password}
                required
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "#4A4238" }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-5 mt-4 rounded-2xl text-[10px] font-black tracking-[0.4em] uppercase text-white bg-[#2C261F] shadow-xl shadow-black/10 transition-all"
            type="submit"
          >
            Authorize Entry
          </motion.button>
        </form>

        <div className="mt-10 text-center">
          <p className="text-[10px] text-slate-300 tracking-widest uppercase">
            &copy; 2026 Stellify Jewelry Atelier.
          </p>
        </div>
      </motion.div>

      <style jsx>{` .font-serif { font-family: 'Prata', serif; } `}</style>
    </div>
  );
};

export default Login;