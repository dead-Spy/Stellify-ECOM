import React, { useState, useEffect } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { 
  TrendingUp, 
  ShoppingBag, 
  Users, 
  Gem, 
  ArrowUpRight, 
  Clock, 
  DollarSign 
} from "lucide-react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";
import { motion } from "framer-motion";

const Dashboard = ({ token }) => {
  const [stats, setStats] = useState({
    totalRevenue: 0,
    totalOrders: 0,
    totalProducts: 0,
    totalClients: 0
  });

  // Sample data for the graph (You can later replace this with API data)
  const salesData = [
    { name: "Mon", sales: 4000 },
    { name: "Tue", sales: 3000 },
    { name: "Wed", sales: 5000 },
    { name: "Thu", sales: 2780 },
    { name: "Fri", sales: 1890 },
    { name: "Sat", sales: 2390 },
    { name: "Sun", sales: 3490 },
  ];

  return (
    <div className="space-y-10 pb-10">
      {/* 1. Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="font-serif text-4xl text-[#2C261F] mb-1 tracking-tight">Atelier Overview</h2>
          <p className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-400">
            Real-time business intelligence
          </p>
        </div>
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border border-slate-100 shadow-sm w-fit">
          <Clock size={14} className="text-[#8D7B68]" />
          <span className="text-[11px] font-bold text-[#2C261F]">
            {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </span>
        </div>
      </div>

      {/* 2. KPI Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Total Revenue", value: `${currency}124,500`, icon: DollarSign, trend: "+12%" },
          { label: "Total Orders", value: "842", icon: ShoppingBag, trend: "+5%" },
          { label: "Masterpieces", value: "156", icon: Gem, trend: "Stable" },
          { label: "Elite Clients", value: "2.4k", icon: Users, trend: "+18%" }
        ].map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            key={index}
            className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-black/5 transition-all group"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-[#F9F7F4] rounded-2xl text-[#8D7B68] group-hover:bg-[#2C261F] group-hover:text-white transition-colors">
                <item.icon size={20} strokeWidth={2} />
              </div>
              <span className="text-[10px] font-black text-emerald-500 bg-emerald-50 px-2 py-1 rounded-lg">
                {item.trend}
              </span>
            </div>
            <p className="text-[11px] font-black tracking-widest text-slate-400 uppercase mb-1">{item.label}</p>
            <h3 className="text-2xl font-serif text-[#2C261F]">{item.value}</h3>
          </motion.div>
        ))}
      </div>

      {/* 3. Sales Chart Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm"
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <h4 className="font-serif text-xl text-[#2C261F]">Acquisition Analytics</h4>
            <p className="text-[10px] font-black tracking-widest text-slate-400 uppercase">Weekly Revenue Performance</p>
          </div>
          <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#8D7B68] hover:text-[#2C261F] transition-colors">
            Full Report <ArrowUpRight size={14} />
          </button>
        </div>
        
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={salesData}>
              <defs>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8D7B68" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#8D7B68" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F1F1" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{fontSize: 10, fontWeight: 700, fill: '#94a3b8'}} 
                dy={10}
              />
              <YAxis 
                hide={true}
              />
              <Tooltip 
                contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', fontSize: '12px', fontWeight: 'bold' }}
              />
              <Area 
                type="monotone" 
                dataKey="sales" 
                stroke="#8D7B68" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorSales)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* 4. Mini List: Recent Activity Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-[40px] border border-slate-100">
            <h4 className="font-serif text-lg mb-6">Recent Acquisitions</h4>
            <div className="space-y-4">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b border-slate-50 last:border-0">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#F9F7F4] flex items-center justify-center text-[10px] font-bold">AS</div>
                    <div>
                      <p className="text-[12px] font-bold text-[#2C261F]">Stellify Bangle Set</p>
                      <p className="text-[10px] text-slate-400 uppercase tracking-tighter">Order #842{i}</p>
                    </div>
                  </div>
                  <p className="text-[12px] font-black text-[#2C261F]">{currency}1,200</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#2C261F] p-8 rounded-[40px] text-white flex flex-col justify-between">
            <div>
              <TrendingUp className="text-[#8D7B68] mb-4" size={32} />
              <h4 className="font-serif text-2xl mb-2">Growth Target</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Your atelier has seen a 14% increase in premium clients this month. Keep up the high craftsmanship.</p>
            </div>
            <div className="mt-8">
              <div className="flex justify-between text-[10px] font-black tracking-widest uppercase mb-2">
                <span>Monthly Goal</span>
                <span>75%</span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-[#8D7B68] w-[75%] rounded-full"></div>
              </div>
            </div>
          </div>
      </div>

      <style jsx>{` .font-serif { font-family: 'Prata', serif; } `}</style>
    </div>
  );
};

export default Dashboard;