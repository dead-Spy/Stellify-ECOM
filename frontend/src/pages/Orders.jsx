import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contexts/ShopContext";
import Title from "../components/Title";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { Package, RefreshCw, Calendar, CreditCard, ChevronRight } from "lucide-react";

const Orders = () => {
  const { currency, backendUrl, token } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadOrderData = async () => {
    try {
      if (!token) return null;
      setLoading(true);

      const response = await axios.post(
        backendUrl + "/api/order/userorders",
        {},
        { headers: { token } }
      );
      
      if (response.data.success) {
        let allOrdersItem = [];
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["date"] = order.date;
            item["paymentMethod"] = order.paymentMethod;
            allOrdersItem.push(item);
          });
        });
        setOrderData(allOrdersItem.reverse());
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className="bg-[#F9F7F4] min-h-screen pt-32 md:pt-44 pb-32 px-4 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Gallery Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
          <div>
            <Title text1={"ACQUISITION"} text2={"HISTORY"} />
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-serif italic text-[#8D7B68] text-sm mt-3 tracking-widest"
            >
              A permanent record of your curated artifacts
            </motion.p>
          </div>
          
          <button 
            onClick={loadOrderData}
            disabled={loading}
            className="flex items-center gap-3 px-6 py-3 bg-white border border-[#8D7B68]/10 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase text-[#2C261F] hover:shadow-lg transition-all active:scale-95 disabled:opacity-50"
          >
            <RefreshCw className={`w-3 h-3 ${loading ? 'animate-spin' : ''}`} />
            Refresh Archive
          </button>
        </div>

        {/* Orders Archive List */}
        <div className="space-y-10">
          <AnimatePresence mode="popLayout">
            {orderData.length > 0 ? (
              orderData.map((item, index) => (
                <motion.div
                  key={`${item._id}-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-[#8D7B68]/5 hover:border-[#8D7B68]/20 transition-all duration-700 shadow-sm hover:shadow-2xl flex flex-col md:flex-row items-center p-6 md:p-8 gap-10"
                >
                  {/* Image Display */}
                  <div className="relative w-full md:w-48 aspect-[4/5] overflow-hidden rounded-2xl bg-[#F9F7F4]">
                    <img 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                      src={item.image[0]} 
                      alt={item.name} 
                    />
                    <div className="absolute top-4 left-4">
                       <span className="bg-white/90 backdrop-blur-md px-3 py-1 text-[8px] font-black tracking-widest uppercase rounded-full shadow-sm">
                         {item.size}
                       </span>
                    </div>
                  </div>

                  {/* Core Details */}
                  <div className="flex-1 w-full space-y-6">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                      <div>
                        <h3 className="font-serif text-2xl md:text-3xl text-[#2C261F] leading-tight mb-2">{item.name}</h3>
                        <div className="flex items-center gap-6 text-[10px] font-bold tracking-widest text-[#8D7B68] uppercase">
                          <p className="flex items-center gap-2">
                             <Calendar className="w-3 h-3" /> {new Date(item.date).toLocaleDateString()}
                          </p>
                          <p className="flex items-center gap-2">
                             <CreditCard className="w-3 h-3" /> {item.paymentMethod}
                          </p>
                        </div>
                      </div>
                      <div className="text-left md:text-right">
                        <p className="font-serif text-2xl text-[#2C261F]">{currency}{item.price}</p>
                        <p className="text-[10px] text-[#8D7B68] font-bold tracking-widest uppercase opacity-60">Quantity: {item.quantity}</p>
                      </div>
                    </div>

                    <div className="h-[1px] bg-gradient-to-r from-[#8D7B68]/20 to-transparent w-full"></div>

                    {/* Status & Action */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                      <div className="flex items-center gap-4 bg-[#F9F7F4] px-5 py-2 rounded-full border border-[#8D7B68]/10">
                        <div className="relative flex items-center justify-center w-2 h-2">
                          <div className={`absolute inset-0 rounded-full animate-ping ${item.status === 'Delivered' ? 'bg-green-400' : 'bg-amber-400'}`}></div>
                          <div className={`w-2 h-2 rounded-full z-10 ${item.status === 'Delivered' ? 'bg-green-600' : 'bg-amber-600'}`}></div>
                        </div>
                        <span className="text-[10px] font-black tracking-[0.2em] uppercase text-[#2C261F] italic">{item.status}</span>
                      </div>

                      <motion.button
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 text-[10px] font-black tracking-[0.4em] uppercase text-[#2C261F] border-b border-[#2C261F] pb-1"
                      >
                        Track Shipment <ChevronRight className="w-3 h-3" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              !loading && (
                <div className="text-center py-40 bg-white/40 rounded-[3rem] border border-dashed border-[#8D7B68]/20">
                  <Package className="w-12 h-12 text-[#8D7B68]/20 mx-auto mb-6" />
                  <p className="font-serif italic text-xl text-[#8D7B68]">Your collection is currently empty.</p>
                </div>
              )
            )}
          </AnimatePresence>
        </div>
      </div>

      <style jsx>{`
        .font-serif { font-family: 'Prata', serif; }
      `}</style>
    </div>
  );
};

export default Orders;