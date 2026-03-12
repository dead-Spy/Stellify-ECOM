import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../contexts/ShopContext";
import Title from "../components/Title";
import RelatedProducts from "../components/RelatedProducts";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ShieldCheck, Truck, RotateCcw, Plus, Minus, Share2, Heart } from "lucide-react";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [tab, setTab] = useState("description");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [productId, products]);

  return productData ? (
    <div className="bg-[#FDFCFB] min-h-screen pt-32 md:pt-44 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Side: Art Gallery Layout */}
          <div className="flex-1 flex flex-col-reverse lg:flex-row gap-6">
            <div className="flex lg:flex-col gap-4 overflow-x-auto lg:w-20 scrollbar-hide">
              {productData.image.map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setImage(item)}
                  className={`relative flex-shrink-0 w-20 lg:w-full aspect-square cursor-pointer overflow-hidden rounded-xl border-2 transition-all duration-500 ${
                    item === image ? "border-[#8D7B68]" : "border-transparent grayscale hover:grayscale-0 opacity-60"
                  }`}
                >
                  <img src={item} className="w-full h-full object-cover" alt="thumb" />
                </motion.div>
              ))}
            </div>

            <div className="flex-1 relative aspect-[4/5] bg-[#F9F7F4] overflow-hidden rounded-[2.5rem] group cursor-zoom-in">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={image}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.1 }}
                  className="w-full h-full object-cover transition-transform duration-700" 
                  src={image} 
                  alt="main" 
                />
              </AnimatePresence>
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                 <span className="text-[9px] tracking-[0.4em] text-white font-black uppercase bg-[#2C261F]/80 backdrop-blur-md px-4 py-2 rounded-full">New Arrival</span>
              </div>
              <button className="absolute top-6 right-6 p-3 bg-white/80 backdrop-blur-md rounded-full text-[#2C261F] hover:bg-[#2C261F] hover:text-white transition-all shadow-sm">
                <Heart size={18} />
              </button>
            </div>
          </div>

          {/* Right Side: Product Details */}
          <div className="flex-1 lg:max-w-xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="flex items-center justify-between mb-6">
                <p className="text-[10px] tracking-[0.5em] font-black text-[#8D7B68] uppercase">Collection — {productData.category}</p>
                <Share2 size={16} className="text-[#8D7B68] cursor-pointer hover:text-[#2C261F]" />
              </div>

              <h1 className="font-serif text-4xl md:text-6xl text-[#2C261F] mb-6 tracking-tight">
                {productData.name}
              </h1>

              <div className="flex items-center gap-6 mb-8">
                <span className="text-3xl font-serif text-[#2C261F]">{currency}{productData.price}</span>
                <div className="flex items-center gap-1 bg-[#F9F7F4] px-3 py-1 rounded-full">
                   <Star size={12} className="fill-[#8D7B68] text-[#8D7B68]" />
                   <span className="text-[10px] font-bold text-[#2C261F]">4.9</span>
                   <span className="text-[10px] text-[#8D7B68] ml-1">(122 reviews)</span>
                </div>
              </div>

              <p className="text-[#4A4238] text-base leading-relaxed mb-10 opacity-80 border-l-2 border-[#8D7B68]/20 pl-6">
                {productData.description}
              </p>

              {/* Quantity and Size Selector */}
              <div className="space-y-10 mb-12">
                <div>
                  <div className="flex justify-between mb-4">
                    <p className="text-[11px] font-black tracking-widest uppercase">Select Size</p>
                    <p className="text-[11px] text-[#8D7B68] underline cursor-pointer">Guide</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {productData.sizes.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => setSize(item)}
                        className={`h-12 w-16 rounded-xl text-[11px] font-bold transition-all duration-300 border ${
                          item === size 
                          ? "bg-[#2C261F] text-white border-[#2C261F] shadow-lg" 
                          : "bg-white text-[#2C261F] border-gray-100 hover:border-[#8D7B68]"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-8">
                   <div className="flex items-center border border-gray-100 rounded-2xl p-1 bg-white shadow-sm">
                      <button onClick={() => setQuantity(q => Math.max(1, q-1))} className="p-3 hover:bg-gray-50 rounded-xl transition-colors"><Minus size={14}/></button>
                      <span className="w-10 text-center font-bold text-sm">{quantity}</span>
                      <button onClick={() => setQuantity(q => q+1)} className="p-3 hover:bg-gray-50 rounded-xl transition-colors"><Plus size={14}/></button>
                   </div>
                   <p className="text-[10px] text-[#8D7B68] font-medium italic">Limited quantities available</p>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => addToCart(productData._id, size)}
                  className="flex-1 bg-[#2C261F] text-white font-bold tracking-[0.3em] py-5 rounded-2xl text-[11px] uppercase shadow-[0_20px_40px_rgba(44,38,31,0.2)] flex items-center justify-center gap-3 transition-all"
                >
                  <Plus size={16} />
                  Claim This Artifact
                </motion.button>
              </div>

              {/* Shipping Info */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-y border-gray-100">
                {[
                  { icon: Truck, t: "Free Shipping", d: "Global Delivery" },
                  { icon: ShieldCheck, t: "Certified", d: "100% Authentic" },
                  { icon: RotateCcw, t: "Returns", d: "30-Day Window" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="p-2 bg-[#F9F7F4] rounded-lg text-[#8D7B68]"><item.icon size={18} /></div>
                    <div>
                      <p className="text-[10px] font-black uppercase text-[#2C261F]">{item.t}</p>
                      <p className="text-[9px] text-[#8D7B68] uppercase tracking-tighter">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Tabbed Content */}
        <div className="mt-32">
          <div className="flex justify-center gap-12 border-b border-gray-100 mb-12">
            {['description', 'reviews'].map((t) => (
              <button 
                key={t}
                onClick={() => setTab(t)}
                className={`pb-4 text-[11px] font-black tracking-widest uppercase transition-all relative ${tab === t ? "text-[#2C261F]" : "text-gray-300"}`}
              >
                {t === 'description' ? 'Product Story' : 'Member Feedback'}
                {tab === t && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2C261F]" />}
              </button>
            ))}
          </div>

          <div className="max-w-3xl mx-auto min-h-[200px]">
            <AnimatePresence mode="wait">
              {tab === 'description' ? (
                <motion.div key="desc" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center space-y-6">
                  <h3 className="font-serif text-3xl text-[#2C261F]">Crafted for the Modern Connoisseur</h3>
                  <p className="text-sm leading-[2] text-[#4A4238] opacity-80">
                    Each {productData.name} is a testament to our commitment to timeless elegance. 
                    Hand-finished in our atelier, it features a unique blend of heritage techniques and contemporary design. 
                    The materials are ethically sourced, ensuring that your treasure is as kind to the earth as it is beautiful.
                  </p>
                </motion.div>
              ) : (
                <motion.div key="rev" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-8">
                  <div className="bg-[#F9F7F4] p-8 rounded-[2rem] flex flex-col md:flex-row items-center gap-10">
                    <div className="text-center">
                       <h2 className="text-5xl font-serif mb-2">4.9</h2>
                       <div className="flex justify-center gap-1 mb-2">
                          {[1,2,3,4,5].map(s => <Star key={s} size={12} className="fill-[#8D7B68] text-[#8D7B68]" />)}
                       </div>
                       <p className="text-[10px] uppercase font-bold text-[#8D7B68]">Based on 122 reviews</p>
                    </div>
                    <div className="flex-1 w-full space-y-2">
                       {[5,4,3,2,1].map(r => (
                         <div key={r} className="flex items-center gap-4">
                            <span className="text-[10px] font-bold w-2">{r}</span>
                            <div className="flex-1 h-1.5 bg-white rounded-full overflow-hidden">
                               <div className="h-full bg-[#8D7B68]" style={{ width: r === 5 ? '90%' : r === 4 ? '7%' : '1%' }}></div>
                            </div>
                         </div>
                       ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-32 pt-20 border-t border-gray-50">
           <div className="mb-12">
              <Title text1={"BEYOND"} text2={"THIS PIECE"} />
           </div>
           <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
        </div>
      </div>

      <style jsx>{`
        .font-serif { font-family: 'Prata', serif; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  ) : (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="w-10 h-10 border-2 border-[#8D7B68]/20 border-t-[#2C261F] rounded-full"
      />
    </div>
  );
};

export default Product;