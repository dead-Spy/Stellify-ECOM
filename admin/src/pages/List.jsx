import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { Trash2, ExternalLink, Package, LayoutGrid } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const List = ({ token }) => {
  const [list, setList] = useState([]);

  // প্রফেশনাল ডেমো ডেটা
  const demoData = [
    {
      _id: "art_001",
      name: "The Eternal Gold Bangle",
      category: "Signature",
      price: 12500,
      image: ["https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop"]
    },
    {
      _id: "art_002",
      name: "Heritage Silver Cuff",
      category: "Limited Edition",
      price: 8900,
      image: ["https://images.unsplash.com/photo-1535303311164-664fc9ec6532?q=80&w=1000&auto=format&fit=crop"]
    },
    {
      _id: "art_003",
      name: "Artisanal Rose Gold Curve",
      category: "Bespoke",
      price: 15200,
      image: ["https://images.unsplash.com/photo-1611085583191-a3b1a308c021?q=80&w=1000&auto=format&fit=crop"]
    }
  ];

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        // যদি ডাটাবেস খালি থাকে তবে ডেমো ডেটা দেখাবে, নয়তো রিয়েল ডেটা
        setList(response.data.products.length > 0 ? response.data.products : demoData);
      } else {
        setList(demoData); // এরর হলে ডেমো ডেটা ব্যাকআপ হিসেবে থাকবে
      }
    } catch (error) {
      setList(demoData); // ফেচিং ফেইল করলে ডেমো ডেটা দেখাবে
    }
  };

  const removeProduct = async (id) => {
    if (window.confirm("Are you sure you want to remove this artifact?")) {
      try {
        const response = await axios.post(
          backendUrl + "/api/product/remove",
          { id },
          { headers: { token } }
        );
        if (response.data.success) {
          toast.success("Artifact removed from archive");
          fetchList();
        } else {
          // ডেমো ডেটা ডিলিট করার সিমুলেশন (প্রজেক্ট লাইভ হলে এটি লাগবে না)
          setList(prev => prev.filter(item => item._id !== id));
          toast.info("Demo artifact removed locally");
        }
      } catch (error) {
        toast.error("Functionality restricted in demo mode");
      }
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="w-full bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 min-h-screen">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <h2 className="font-serif text-4xl text-[#2C261F] mb-2 tracking-tight">Inventory Archive</h2>
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
             <p className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-400">
               Total {list.length} Masterpieces Live
             </p>
          </div>
        </div>
        
        <div className="flex gap-4">
           <button className="p-3 bg-[#F9F7F4] rounded-xl text-slate-400 hover:text-[#2C261F] transition-all">
             <LayoutGrid size={18} />
           </button>
        </div>
      </div>

      {/* List Table Layout */}
      <div className="flex flex-col">
        {/* Modern Table Header */}
        <div className="hidden md:grid grid-cols-[1fr_3.5fr_1.5fr_1.5fr_1fr] items-center py-6 px-8 bg-[#F9F7F4] rounded-2xl mb-6 text-[10px] font-black tracking-[0.3em] uppercase text-[#8D7B68]">
          <span>Visual</span>
          <span>Creation Details</span>
          <span>Category</span>
          <span>Price</span>
          <span className="text-center">Action</span>
        </div>

        {/* Product Rows */}
        <div className="flex flex-col gap-4">
          <AnimatePresence>
            {list.map((item, index) => (
              <motion.div
                key={item._id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.05 }}
                className="grid grid-cols-[1fr_2.5fr_1fr] md:grid-cols-[1fr_3.5fr_1.5fr_1.5fr_1fr] items-center gap-4 py-4 px-6 md:px-8 bg-white border border-slate-50 hover:border-[#8D7B68]/20 hover:shadow-xl hover:shadow-black/5 transition-all rounded-2xl group"
              >
                {/* Visual */}
                <div className="relative w-16 h-20 bg-[#F9F7F4] rounded-xl overflow-hidden shadow-inner">
                  <img className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700" src={item.image[0]} alt="artifact" />
                </div>

                {/* Name & ID */}
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-bold text-[#2C261F] group-hover:text-[#8D7B68] transition-colors">{item.name}</p>
                  <p className="text-[9px] font-mono tracking-tighter text-slate-300 uppercase">ID: {item._id.slice(-8)}</p>
                </div>

                {/* Category */}
                <div className="hidden md:block">
                  <span className="px-4 py-1.5 bg-[#EAE3DC]/30 text-[#8D7B68] text-[9px] font-black tracking-widest uppercase rounded-full">
                    {item.category}
                  </span>
                </div>

                {/* Price */}
                <div className="text-sm font-medium text-[#2C261F]">
                  <span className="opacity-40 mr-1">{currency || "$"}</span>
                  {item.price.toLocaleString()}
                </div>

                {/* Action Button */}
                <div className="flex justify-center items-center gap-4">
                  <button 
                    onClick={() => removeProduct(item._id)}
                    className="p-3 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                    title="Delete Artifact"
                  >
                    <Trash2 size={18} strokeWidth={2} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {list.length === 0 && (
        <div className="py-40 flex flex-col items-center justify-center text-slate-300 gap-4">
           <Package size={48} strokeWidth={1} />
           <p className="text-[10px] font-black tracking-[0.4em] uppercase">Archive is currently empty</p>
        </div>
      )}

      <style jsx>{` .font-serif { font-family: 'Prata', serif; } `}</style>
    </div>
  );
};

export default List;