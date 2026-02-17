import React, { useState, useEffect } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { Star, Trash2, MessageCircle, User, CheckCircle2, XCircle } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = ({ token }) => {
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/review/list");
      if (response.data.success) {
        setReviews(response.data.reviews.reverse());
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const toggleStatus = async (id, currentStatus) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/review/status",
        { id, status: !currentStatus },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success("Visibility Updated");
        fetchReviews();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div className="space-y-10 pb-10">
      <div>
        <h2 className="font-serif text-4xl text-[#2C261F] mb-1 tracking-tight italic">Client Testimonials</h2>
        <p className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-400">Voices of Appreciation & Feedback</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            key={index}
            className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-xl transition-all group"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={14} 
                      fill={i < item.rating ? "#8D7B68" : "none"} 
                      className={i < item.rating ? "text-[#8D7B68]" : "text-slate-200"} 
                    />
                  ))}
                </div>
                <span className={`text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-tighter ${item.approved ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                  {item.approved ? "Public" : "Pending"}
                </span>
              </div>

              <MessageCircle size={24} className="text-[#F9F7F4] mb-4" />
              <p className="text-sm text-[#2C261F] font-medium leading-relaxed italic mb-6">
                "{item.comment}"
              </p>
            </div>

            <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#F9F7F4] flex items-center justify-center text-[#8D7B68]">
                  <User size={16} />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-[#2C261F]">{item.userName}</p>
                  <p className="text-[9px] text-slate-400 uppercase tracking-tighter">{item.date}</p>
                </div>
              </div>
              
              <div className="flex gap-2">
                <button 
                  onClick={() => toggleStatus(item._id, item.approved)}
                  className={`p-2 rounded-xl transition-colors ${item.approved ? 'text-amber-500 hover:bg-amber-50' : 'text-emerald-500 hover:bg-emerald-50'}`}
                >
                  {item.approved ? <XCircle size={18} /> : <CheckCircle2 size={18} />}
                </button>
                <button className="p-2 text-slate-300 hover:text-red-500 transition-colors">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;