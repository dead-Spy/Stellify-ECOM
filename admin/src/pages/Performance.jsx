import React, { useState, useEffect } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  LineChart, Line, PieChart, Pie, Cell 
} from "recharts";
import { TrendingUp, ArrowUpRight, DollarSign, ShoppingBag, Award, Zap } from "lucide-react";
import { motion } from "framer-motion";

const Performance = ({ token }) => {
  // Sample Data (Replace with API data later)
  const revenueData = [
    { month: "Jan", revenue: 45000 },
    { month: "Feb", revenue: 52000 },
    { month: "Mar", revenue: 48000 },
    { month: "Apr", revenue: 61000 },
    { month: "May", revenue: 55000 },
    { month: "Jun", revenue: 67000 },
  ];

  const categoryData = [
    { name: "Bridal", value: 400 },
    { name: "Necklaces", value: 300 },
    { name: "Rings", value: 300 },
    { name: "Bangles", value: 200 },
  ];

  const COLORS = ["#2C261F", "#8D7B68", "#EAE3DC", "#C5B4A3"];

  return (
    <div className="space-y-10 pb-20">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="font-serif text-4xl text-[#2C261F] mb-1 tracking-tight italic">Atelier Performance</h2>
          <p className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-400">Deep Insights & Financial Analytics</p>
        </div>
        <button className="bg-white border border-slate-100 px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest text-[#2C261F] shadow-sm hover:shadow-md transition-all">
          Download Annual Report
        </button>
      </div>

      {/* High-Level Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Gross Revenue", value: `${currency}284.5k`, trend: "+14.2%", icon: DollarSign },
          { label: "Avg. Order Value", value: `${currency}1,240`, trend: "+5.1%", icon: Zap },
          { label: "Customer LTV", value: `${currency}4,800`, trend: "+8.4%", icon: Award }
        ].map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm relative overflow-hidden">
             <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-[#F9F7F4] rounded-2xl text-[#8D7B68]">
                  <stat.icon size={20} />
                </div>
                <span className="text-[10px] font-black text-emerald-500 bg-emerald-50 px-2 py-1 rounded-lg flex items-center gap-1">
                  <ArrowUpRight size={10} /> {stat.trend}
                </span>
             </div>
             <p className="text-[10px] font-black tracking-widest text-slate-400 uppercase mb-1">{stat.label}</p>
             <h3 className="text-3xl font-serif text-[#2C261F]">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Sales Trend Chart */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-10 rounded-[48px] border border-slate-100 shadow-sm"
        >
          <div className="mb-8">
             <h4 className="font-serif text-xl text-[#2C261F]">Revenue Trajectory</h4>
             <p className="text-[10px] font-black tracking-widest text-slate-400 uppercase">Monthly Earnings Comparison</p>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F1F1" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#94a3b8'}} dy={10} />
                <YAxis hide={true} />
                <Tooltip cursor={{fill: '#F9F7F4'}} contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }} />
                <Bar dataKey="revenue" fill="#2C261F" radius={[10, 10, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Category Distribution Chart */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-10 rounded-[48px] border border-slate-100 shadow-sm"
        >
          <div className="mb-8">
             <h4 className="font-serif text-xl text-[#2C261F]">Collection Popularity</h4>
             <p className="text-[10px] font-black tracking-widest text-slate-400 uppercase">Market Share by Category</p>
          </div>
          <div className="h-[300px] flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={8}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute flex flex-col items-center">
               <TrendingUp size={24} className="text-[#8D7B68] mb-1" />
               <span className="text-[10px] font-black uppercase tracking-tighter">Global Share</span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Top Performing Pieces */}
      <div className="bg-[#2C261F] p-10 md:p-14 rounded-[56px] text-white overflow-hidden relative">
         <div className="absolute top-0 right-0 p-20 opacity-10">
            <Award size={200} />
         </div>
         <div className="relative z-10">
            <h4 className="font-serif text-3xl mb-10">Signature Masterpieces</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
               {[1, 2, 3, 4].map((_, i) => (
                 <div key={i} className="flex flex-col gap-4 border-l border-white/10 pl-6">
                    <p className="text-[10px] font-black tracking-widest text-[#8D7B68] uppercase">Rank #0{i+1}</p>
                    <div>
                      <h5 className="font-serif text-lg leading-tight mb-1">Empress Diamond Necklace</h5>
                      <p className="text-xs text-white/50 italic">Sold 42 Units this quarter</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </div>
      
      <style jsx>{` .font-serif { font-family: 'Prata', serif; } `}</style>
    </div>
  );
};

export default Performance;