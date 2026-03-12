import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contexts/ShopContext";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    <div className="bg-[#F9F7F4] min-h-screen pt-28 sm:pt-36 md:pt-44 pb-32 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <Title text1={"YOUR"} text2={"BAG"} />
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif italic text-[#8D7B68] text-xs sm:text-sm mt-2 tracking-widest"
            >
              {cartData.length} Items selected for your collection
            </motion.p>
          </div>
          <button 
            onClick={() => navigate("/collection")}
            className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#2C261F] flex items-center gap-2 group"
          >
            Continue Curating <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Cart Items */}
          <div className="w-full lg:flex-1">
            <AnimatePresence mode="popLayout">
              {cartData.length > 0 ? (
                cartData.map((item) => {
                  const productData = products.find((p) => p._id === item._id);
                  if (!productData) return null;

                  return (
                    <motion.div
                      layout
                      key={`${item._id}-${item.size}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      className="group relative bg-white/40 backdrop-blur-sm p-6 rounded-[2rem] mb-6 border border-[#8D7B68]/5 hover:border-[#8D7B68]/20 transition-all duration-500 shadow-sm hover:shadow-xl flex flex-col sm:flex-row items-center gap-6"
                    >
                      {/* Product Image */}
                      <div className="relative w-24 h-32 sm:w-32 sm:h-40 rounded-2xl overflow-hidden bg-white shadow-inner flex-shrink-0">
                        <img 
                          src={productData.image[0]} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                          alt={productData.name} 
                        />
                      </div>

                      {/* Info & Advanced Controls */}
                      <div className="flex-1 w-full space-y-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-serif text-lg md:text-2xl text-[#2C261F]">{productData.name}</h3>
                            <p className="text-[10px] font-black tracking-widest text-[#8D7B68] uppercase mt-1">Size: {item.size}</p>
                          </div>
                          <p className="font-serif text-lg text-[#2C261F]">{currency}{productData.price}</p>
                        </div>

                        <div className="flex items-center justify-between pt-4">
                          {/* Advanced Quantity Toggle */}
                          <div className="flex items-center bg-white rounded-full border border-[#8D7B68]/10 p-1 shadow-sm">
                            <button 
                              onClick={() => updateQuantity(item._id, item.size, item.quantity - 1)}
                              className="p-2 hover:bg-[#F9F7F4] rounded-full transition-colors"
                            >
                              <Minus className="w-3 h-3 text-[#8D7B68]" />
                            </button>
                            <span className="w-10 text-center text-sm font-bold text-[#2C261F]">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item._id, item.size, item.quantity + 1)}
                              className="p-2 hover:bg-[#F9F7F4] rounded-full transition-colors"
                            >
                              <Plus className="w-3 h-3 text-[#8D7B68]" />
                            </button>
                          </div>

                          <motion.button
                            whileHover={{ scale: 1.1, color: "#991b1b" }}
                            onClick={() => updateQuantity(item._id, item.size, 0)}
                            className="p-3 text-[#8D7B68]/30 transition-colors"
                          >
                            <Trash2 className="w-5 h-5" />
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20 bg-white rounded-[3rem] border border-dashed border-[#8D7B68]/20"
                >
                  <ShoppingBag className="w-12 h-12 text-[#8D7B68]/20 mx-auto mb-4" />
                  <p className="font-serif italic text-[#8D7B68]">Your collection is empty</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Checkout Summary */}
          {cartData.length > 0 && (
            <div className="w-full lg:w-[400px] lg:sticky lg:top-40">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-[#2C261F] p-8 md:p-10 rounded-[3rem] text-[#F9F7F4] shadow-2xl relative overflow-hidden"
              >
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                
                <h3 className="font-serif text-2xl mb-8 tracking-wide text-center">Summary</h3>
                
                <div className="space-y-6">
                   <CartTotal />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: "#3d352c" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate("/place-order")}
                  className="w-full bg-[#F9F7F4] text-[#2C261F] text-[11px] font-black tracking-[0.3em] mt-10 py-5 rounded-2xl shadow-xl transition-all uppercase"
                >
                  Confirm & Checkout
                </motion.button>
                
                <p className="text-[9px] text-center mt-6 text-[#8D7B68] tracking-widest uppercase opacity-60">
                  Complimentary Shipping on all artifacts
                </p>
              </motion.div>
            </div>
          )}

        </div>
      </div>

      <style jsx>{`
        .font-serif { font-family: 'Prata', serif; }
      `}</style>
    </div>
  );
};

export default Cart;