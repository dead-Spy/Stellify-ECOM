import React, { useState, useEffect } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { Percent, Plus, Trash2, Ticket, Calendar, Tag, Users } from "lucide-react";
import { motion } from "framer-motion";

const Coupons = ({ token }) => {
  const [list, setList] = useState([]);
  const [code, setCode] = useState("");
  const [discount, setDiscount] = useState("");
  const [expiry, setExpiry] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        backendUrl + "/api/coupon/add",
        { code, discount, expiry },
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success("Elite Coupon Activated");
        setCode("");
        setDiscount("");
        setExpiry("");
        fetchCoupons();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
  };

  const fetchCoupons = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/coupon/list", { headers: { token } });
      if (response.data.success) {
        setList(response.data.coupons);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const removeCoupon = async (id) => {
    if (window.confirm("Archiving this coupon will disable it for all clients. Proceed?")) {
      try {
        const response = await axios.post(
          backendUrl + "/api/coupon/remove",
          { id },
          { headers: { token } }
        );
        if (response.data.success) {
          toast.success("Coupon Revoked");
          await fetchCoupons();
        }
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  useEffect(() => {
    fetchCoupons();
  }, [token]);

  return (
    <div className="space-y-10">
      <div>
        <h2 className="font-serif text-4xl text-[#2C261F] mb-1 tracking-tight italic">Elite Coupons</h2>
        <p className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-400">Exclusive Incentives for Distinguished Clients</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* CREATE COUPON FORM */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-1 bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm h-fit"
        >
          <div className="flex items-center gap-3 mb-8 text-[#8D7B68]">
            <Plus size={20} />
            <h3 className="font-serif text-xl text-[#2C261F]">Forge New Coupon</h3>
          </div>

          <form onSubmit={onSubmitHandler} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black tracking-widest text-slate-400 uppercase ml-1">Coupon Code</label>
              <div className="relative">
                <Tag className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                <input
                  onChange={(e) => setCode(e.target.value.toUpperCase())}
                  value={code}
                  className="w-full pl-12 pr-4 py-4 bg-[#F9F7F4] border-none rounded-2xl text-sm focus:ring-1 focus:ring-[#8D7B68] outline-none font-bold tracking-widest"
                  type="text"
                  placeholder="e.g. STELLIFY25"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black tracking-widest text-slate-400 uppercase ml-1">Discount Percentage (%)</label>
              <div className="relative">
                <Percent className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                <input
                  onChange={(e) => setDiscount(e.target.value)}
                  value={discount}
                  className="w-full pl-12 pr-4 py-4 bg-[#F9F7F4] border-none rounded-2xl text-sm focus:ring-1 focus:ring-[#8D7B68] outline-none font-medium"
                  type="number"
                  placeholder="25"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black tracking-widest text-slate-400 uppercase ml-1">Expiration Date</label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                <input
                  onChange={(e) => setExpiry(e.target.value)}
                  value={expiry}
                  className="w-full pl-12 pr-4 py-4 bg-[#F9F7F4] border-none rounded-2xl text-sm focus:ring-1 focus:ring-[#8D7B68] outline-none font-medium"
                  type="date"
                  required
                />
              </div>
            </div>

            <button
              disabled={loading}
              className="w-full py-5 rounded-2xl text-[10px] font-black tracking-[0.3em] uppercase text-white bg-[#2C261F] hover:bg-[#4A4238] transition-all disabled:opacity-50 shadow-xl shadow-black/5"
              type="submit"
            >
              {loading ? "Forging..." : "Activate Incentive"}
            </button>
          </form>
        </motion.div>

        {/* ACTIVE COUPONS LIST */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {list.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                key={index}
                className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm relative overflow-hidden group border-l-4 border-l-[#8D7B68]"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-[#F9F7F4] rounded-2xl text-[#8D7B68]">
                    <Ticket size={24} />
                  </div>
                  <button onClick={() => removeCoupon(item._id)} className="p-2 text-slate-300 hover:text-red-500 transition-colors">
                    <Trash2 size={18} />
                  </button>
                </div>
                
                <h4 className="text-xl font-black tracking-[0.2em] text-[#2C261F] mb-1">{item.code}</h4>
                <p className="text-[11px] font-bold text-[#8D7B68] uppercase tracking-widest mb-4">{item.discount}% Reduction Applied</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Calendar size={12} />
                    <span className="text-[10px] font-bold uppercase tracking-tighter">Expires: {new Date(item.expiry).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-md">
                    <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
                    <span className="text-[9px] font-black uppercase">Active</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {list.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 bg-white rounded-[40px] border border-dashed border-slate-200">
              <Percent size={48} className="text-slate-200 mb-4" />
              <p className="text-slate-400 font-serif text-lg italic">No active incentives currently curated</p>
            </div>
          )}
        </div>
      </div>
      <style jsx>{` .font-serif { font-family: 'Prata', serif; } `}</style>
    </div>
  );
};

export default Coupons;