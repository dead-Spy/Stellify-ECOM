import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contexts/ShopContext";
import ProductItem from "../components/ProductItem";
import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal, ShoppingBag, ArrowDown } from "lucide-react";

const Collection = () => {
  const { products, search, showSearch, addToCart, navigate } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");
  const [visibleCount, setVisibleCount] = useState(10); 

  const selectedProductIds = ["pro_id20", "pro_id37", "pro_id29", "pro_id42", "pro_id43", "pro_id44", "pro_id27", "pro_id32", "pro_id41", "pro_id15"];

  const toggleCategory = (e) => {
    const val = e.target.value;
    setCategory(prev => prev.includes(val) ? prev.filter(item => item !== val) : [...prev, val]);
    setVisibleCount(10); 
  };

  const toggleSubCategory = (e) => {
    const val = e.target.value;
    setSubCategory(prev => prev.includes(val) ? prev.filter(item => item !== val) : [...prev, val]);
    setVisibleCount(10); 
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (selectedProductIds.length > 0) {
      productsCopy = productsCopy.filter(item => selectedProductIds.includes(item._id));
    }

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }
    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }
    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = [...filterProducts];
    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => { 
    applyFilter(); 
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => { 
    sortProduct(); 
  }, [sortType]);

  const loadMore = () => {
    setVisibleCount(prevCount => prevCount + 10);
  };

  return (
    <div className="bg-[#F9F7F4] min-h-screen pt-32 md:pt-44 pb-20">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-serif text-[#2C261F] tracking-tighter leading-none">
              Archive <span className="italic font-light text-[#8D7B68] shimmer-text px-1">Collection</span>
            </h1>
            <div className="flex items-center gap-4 mt-6">
              <span className="w-8 h-[1px] bg-[#8D7B68]"></span>
              <p className="text-[10px] tracking-[0.4em] uppercase font-black text-[#8D7B68]">
                {filterProducts.length} Crafted Masterpieces
              </p>
            </div>
          </motion.div>

          {/* No chnage's */}
          <div className="flex items-center gap-4 w-full md:w-auto">
            <button 
              onClick={() => setShowFilter(!showFilter)}
              className={`flex-1 md:flex-none flex items-center justify-center gap-3 px-8 py-4 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-500 ${showFilter ? 'bg-[#2C261F] text-white shadow-lg' : 'bg-white border border-[#2C261F]/10 text-[#2C261F]'}`}
            >
              <SlidersHorizontal size={14} />
              {showFilter ? "Close" : "Refine"}
            </button>
            
            <div className="relative flex-1 md:flex-none">
              <select 
                onChange={(e) => setSortType(e.target.value)}
                className="w-full bg-white border border-[#2C261F]/10 rounded-full px-8 py-4 text-[10px] font-bold tracking-widest uppercase outline-none cursor-pointer appearance-none shadow-sm"
              >
                <option value="relevant">Relevant</option>
                <option value="low-high">Price: Low-High</option>
                <option value="high-low">Price: High-Low</option>
              </select>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {showFilter && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden mb-12"
            >
              <div className="bg-white rounded-[2.5rem] p-10 md:p-14 border border-[#8D7B68]/10 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="space-y-6">
                  <p className="text-[11px] font-black tracking-[0.4em] uppercase text-[#2C261F] border-b border-[#2C261F]/5 pb-4">Collections</p>
                  <div className="flex flex-col gap-4">
                    {['Signature', 'Limited Edition', 'Artisan Series'].map((item) => (
                      <label key={item} className="flex items-center gap-4 cursor-pointer group">
                        <input type="checkbox" value={item} onChange={toggleCategory} checked={category.includes(item)} className="w-4 h-4 accent-[#2C261F] rounded" />
                        <span className="text-[11px] tracking-widest uppercase text-[#4A4238] group-hover:text-[#2C261F] transition-all">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="text-[11px] font-black tracking-[0.4em] uppercase text-[#2C261F] border-b border-[#2C261F]/5 pb-4">Artifact Type</p>
                  <div className="flex flex-col gap-4">
                    {['Necklace', 'Bangles', 'Earrings', 'Rings'].map((item) => (
                      <label key={item} className="flex items-center gap-4 cursor-pointer group">
                        <input type="checkbox" value={item} onChange={toggleSubCategory} checked={subCategory.includes(item)} className="w-4 h-4 accent-[#2C261F] rounded" />
                        <span className="text-[11px] tracking-widest uppercase text-[#4A4238] group-hover:text-[#2C261F] transition-all">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="bg-[#F9F7F4] p-8 rounded-[2rem] flex flex-col justify-center border border-[#8D7B68]/5">
                  <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#8D7B68] mb-3 italic">Atelier Note</p>
                  <p className="text-[11px] leading-relaxed text-[#4A4238] opacity-70 uppercase tracking-tighter">
                    Each artifact is individually numbered and handcrafted.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div layout className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
          <AnimatePresence>
            {filterProducts.slice(0, visibleCount).map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={item._id}
                className="group relative"
              >
                <div className="bg-white rounded-[2.2rem] p-2 md:p-3 border border-transparent hover:border-[#8D7B68]/20 transition-all duration-500 shadow-sm hover:shadow-xl">
                  <div className="relative overflow-hidden rounded-[1.8rem] aspect-[3/4]">
                    <ProductItem id={item._id} name={item.name} price={item.price} image={item.image} />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-500 flex flex-col items-center justify-center gap-4">
                       <button onClick={() => addToCart(item._id, "Standard")} className="bg-white p-4 rounded-full text-[#2C261F] hover:bg-[#2C261F] hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 shadow-lg">
                          <ShoppingBag className="w-5 h-5" />
                       </button>
                       <button onClick={() => navigate(`/product/${item._id}`)} className="bg-white/90 px-6 py-2.5 rounded-full text-[9px] font-black tracking-widest uppercase text-[#2C261F] transform translate-y-4 group-hover:translate-y-0 delay-75 shadow-lg">
                          Details
                       </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {visibleCount < filterProducts.length && (
          <div className="mt-20 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={loadMore}
              className="flex items-center gap-4 px-12 py-5 bg-[#2C261F] text-white text-[10px] font-black tracking-[0.4em] uppercase rounded-full shadow-2xl hover:bg-[#4A4238] transition-all"
            >
              Explore More <ArrowDown size={14} />
            </motion.button>
          </div>
        )}
      </div>

      <style jsx>{`
        .font-serif { font-family: 'Prata', serif; }
        .shimmer-text {
          display: inline-block;
          background: linear-gradient(
            to right, 
            #8D7B68 0%, 
            #8D7B68 30%, 
            #D4AF37 50%, 
            #8D7B68 70%, 
            #8D7B68 100%
          );
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: shine 4s linear infinite;
          padding-right: 0.1em; /* টেক্সটের শেষ প্রান্ত যাতে কেটে না যায় */
        }
        @keyframes shine {
          to { background-position: 200% center; }
        }
      `}</style>
    </div>
  );
};

export default Collection;