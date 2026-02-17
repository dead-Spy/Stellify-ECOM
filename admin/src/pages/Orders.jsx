import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { Box, MapPin, Phone, CreditCard, Calendar, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  // প্রফেশনাল লাক্সারি অর্ডার ডেমো ডেটা
  const demoOrders = [
    {
      _id: "ord_001",
      items: [
        { name: "The Eternal Gold Bangle", quantity: 1, size: "2-6" },
        { name: "Artisanal Rose Gold Curve", quantity: 1, size: "2-4" }
      ],
      amount: 27700,
      paymentMethod: "Bank Transfer",
      payment: true,
      date: new Date().getTime(),
      status: "Packing",
      address: {
        firstName: "Alexander",
        lastName: "Sterling",
        street: "72 luxury Row",
        city: "Manhattan",
        state: "NY",
        zipcode: "10001",
        phone: "+1-212-555-0198"
      }
    },
    {
      _id: "ord_002",
      items: [
        { name: "Heritage Silver Cuff", quantity: 1, size: "2-8" }
      ],
      amount: 8900,
      paymentMethod: "Stripe",
      payment: false,
      date: new Date(Date.now() - 86400000).getTime(),
      status: "Order Placed",
      address: {
        firstName: "Isabella",
        lastName: "Rossi",
        street: "Via Montenapoleone",
        city: "Milan",
        state: "Lombardy",
        zipcode: "20121",
        phone: "+39-02-1234567"
      }
    }
  ];

  const fetchAllOrders = async () => {
    if (!token) return null;
    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } }
      );
      if (response.data.success && response.data.orders.length > 0) {
        setOrders(response.data.orders.reverse());
      } else {
        setOrders(demoOrders); // ব্যাকএন্ডে ডাটা না থাকলে ডেমো দেখাবে
      }
    } catch (error) {
      setOrders(demoOrders); // এরর হলে ডেমো দেখাবে
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/status",
        { orderId, status: event.target.value },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success("Shipment Status Updated");
        await fetchAllOrders();
      }
    } catch (error) {
      // ডেমো মোডে স্ট্যাটাস পরিবর্তন সিমুলেশন
      setOrders(prev => prev.map(order => 
        order._id === orderId ? { ...order, status: event.target.value } : order
      ));
      toast.info("Status updated in viewing mode");
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div className="w-full bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-slate-100 min-h-screen">
      
      <div className="mb-12">
        <h2 className="font-serif text-4xl text-[#2C261F] mb-2 tracking-tight italic">Client Acquisitions</h2>
        <p className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-400">
          Overseeing {orders.length} Active Masterpiece Deliveries
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {orders.map((order, index) => (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            key={index}
            className="grid grid-cols-1 md:grid-cols-[0.5fr_2fr_1.2fr_0.8fr_1.2fr] gap-8 items-start bg-[#F9F7F4]/50 border border-slate-100 p-8 rounded-[32px] hover:bg-white hover:shadow-2xl hover:shadow-black/5 transition-all group"
          >
            {/* Items Count Box */}
            <div className="flex flex-col items-center justify-center p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <Box size={28} className="text-[#8D7B68] opacity-60 group-hover:scale-110 transition-transform duration-500" />
              <span className="text-[10px] font-black text-[#2C261F] mt-2 tracking-tighter">{order.items.length} Artifacts</span>
            </div>

            {/* Product & Address Info */}
            <div className="space-y-4">
              <div className="space-y-2">
                {order.items.map((item, i) => (
                  <p key={i} className="text-[13px] font-bold text-[#2C261F] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span>
                    {item.name} <span className="text-[#8D7B68] font-medium italic">x {item.quantity}</span> 
                    <span className="ml-1 text-[8px] bg-[#EAE3DC] px-2 py-0.5 rounded text-[#2C261F] uppercase font-black">{item.size}</span>
                  </p>
                ))}
              </div>
              
              <div className="pt-4 border-t border-slate-200/50">
                <p className="text-[11px] font-black tracking-widest text-[#2C261F] uppercase mb-2 flex items-center gap-2">
                   <MapPin size={12} className="text-[#8D7B68]" /> {order.address.firstName} {order.address.lastName}
                </p>
                <p className="text-[12px] text-slate-500 leading-relaxed font-medium">
                  {order.address.street}, {order.address.city}, {order.address.state}, {order.address.zipcode}
                </p>
                <p className="text-[12px] font-bold text-[#8D7B68] mt-2 flex items-center gap-2">
                  <Phone size={12} /> {order.address.phone}
                </p>
              </div>
            </div>

            {/* Payment & Date */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg border border-slate-100 shadow-sm"><CreditCard size={14} className="text-[#8D7B68]" /></div>
                <div>
                  <p className="text-[9px] font-black tracking-widest uppercase text-slate-400">Method</p>
                  <p className="text-[12px] font-bold text-[#2C261F]">{order.paymentMethod}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg border border-slate-100 shadow-sm"><Calendar size={14} className="text-[#8D7B68]" /></div>
                <div>
                  <p className="text-[9px] font-black tracking-widest uppercase text-slate-400">Date</p>
                  <p className="text-[12px] font-bold text-[#2C261F]">{new Date(order.date).toLocaleDateString()}</p>
                </div>
              </div>
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full w-fit ${order.payment ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                <div className={`w-1 h-1 rounded-full ${order.payment ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'}`}></div>
                <span className="text-[8px] font-black uppercase tracking-[0.15em]">{order.payment ? "Payment Captured" : "Awaiting Funds"}</span>
              </div>
            </div>

            {/* Total Value */}
            <div className="flex flex-col">
               <p className="text-[9px] font-black tracking-widest uppercase text-slate-400 mb-1">Acquisition Value</p>
               <p className="text-2xl font-serif text-[#2C261F] tracking-tighter">
                 <span className="text-sm align-top mr-0.5">{currency || "$"}</span>
                 {order.amount.toLocaleString()}
               </p>
            </div>

            {/* Status Dropdown */}
            <div className="flex flex-col">
              <p className="text-[9px] font-black tracking-widest uppercase text-slate-400 mb-3">Status Control</p>
              <select
                onChange={(e) => statusHandler(e, order._id)}
                value={order.status}
                className="w-full bg-white border border-slate-200 px-4 py-3 rounded-xl text-[11px] font-bold text-[#2C261F] outline-none cursor-pointer focus:ring-1 focus:ring-[#8D7B68] shadow-sm hover:border-[#8D7B68]/30 transition-all"
              >
                <option value="Order Placed">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out For Delivery">Out For Delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx>{` .font-serif { font-family: 'Prata', serif; } `}</style>
    </div>
  );
};

export default Orders;