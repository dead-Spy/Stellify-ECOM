import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contexts/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Filter, X, SlidersHorizontal, ShoppingBag, Eye, ArrowUpDown } from "lucide-react";

const Collection = () => {
  const { products, search, showSearch, addToCart, navigate } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [showSortDrawer, setShowSortDrawer] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");
  const [loading, setLoading] = useState(true);

  // track active Card
  const [activeCard, setActiveCard] = useState(null);

  const toggleCategory = (e) => {
    const val = e.target.value;
    setCategory(prev => prev.includes(val) ? prev.filter(item => item !== val) : [...prev, val]);
  };

  const toggleSubCategory = (e) => {
    const val = e.target.value;
    setSubCategory(prev => prev.includes(val) ? prev.filter(item => item !== val) : [...prev, val]);
  };

  const applyFilter = () => {
    let productsCopy = products.slice();
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
    setTimeout(() => setLoading(false), 500);
  };

  const sortProduct = () => {
    let filterProductsCopy = filterProducts.slice();
    switch (sortType) {
      case "low-high":
        setFilterProducts(filterProductsCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(filterProductsCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => { applyFilter(); }, [category, subCategory, search, showSearch, products]);
  useEffect(() => { sortProduct(); }, [sortType]);

  return (
    <div className="relative flex flex-col sm:flex-row gap-8 pt-24 md:pt-36 px-4 md:px-12 bg-[#FCFBFA] min-h-screen font-sans items-start">
      
      {/* Sidebar & Mobile Filters */}
      <div className="hidden sm:block min-w-[250px] sticky top-32 self-start">
        <div className="bg-white p-6 rounded-[2rem] border border-[#8D7B68]/10 shadow-sm">
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#8D7B68]/10">
            <SlidersHorizontal className="w-4 h-4 text-[#2C261F]" />
            <span className="font-serif text-lg tracking-widest text-[#2C261F]">REFINE</span>
          </div>
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-[10px] font-black tracking-[0.2em] text-[#8D7B68] uppercase">Collections</p>
              <div className="flex flex-col gap-3">
                {["Signature", "Limited Edition", "Artisan Series"].map((cat) => (
                  <label key={cat} className="group flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" value={cat} onChange={toggleCategory} checked={category.includes(cat)} className="peer hidden" />
                    <div className="w-4 h-4 border rounded border-[#8D7B68]/30 peer-checked:bg-[#2C261F] peer-checked:border-[#2C261F] transition-all flex items-center justify-center">
                      <X className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100" />
                    </div>
                    <span className="text-[11px] tracking-widest text-[#4A4238] group-hover:text-[#2C261F] uppercase">{cat}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-4 text-[10px] font-black tracking-[0.2em] text-[#8D7B68] uppercase">Artifact Type</p>
              <div className="flex flex-col gap-3">
                {["Necklace", "Bangles", "Earrings", "Rings"].map((type) => (
                  <label key={type} className="group flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" value={type} onChange={toggleSubCategory} checked={subCategory.includes(type)} className="peer hidden" />
                    <div className="w-4 h-4 border rounded border-[#8D7B68]/30 peer-checked:bg-[#2C261F] peer-checked:border-[#2C261F] transition-all flex items-center justify-center">
                      <X className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100" />
                    </div>
                    <span className="text-[11px] tracking-widest text-[#4A4238] group-hover:text-[#2C261F] uppercase">{type}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-3 w-full px-6">
        <button onClick={() => setShowFilter(true)} className="flex-1 flex items-center justify-center gap-2 py-4 bg-white text-[#2C261F] rounded-full shadow-2xl border border-[#8D7B68]/20 backdrop-blur-md">
          <Filter className="w-4 h-4" />
          <span className="text-[10px] font-bold tracking-widest uppercase">Filter</span>
        </button>
        <button onClick={() => setShowSortDrawer(true)} className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#2C261F] text-white rounded-full shadow-2xl">
          <ArrowUpDown className="w-4 h-4" />
          <span className="text-[10px] font-bold tracking-widest uppercase">Sort</span>
        </button>
      </div>

      {/* Filter & Sort Drawers */}
      <AnimatePresence>
        {(showFilter || showSortDrawer) && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => {setShowFilter(false); setShowSortDrawer(false)}} className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] sm:hidden" />
        )}
        {showFilter && (
          <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "spring", damping: 25 }} className="fixed bottom-0 inset-x-0 z-[70] bg-white rounded-t-[3rem] p-8 sm:hidden max-h-[80vh] overflow-y-auto">
             <div className="flex justify-between items-center mb-8">
                <h2 className="font-serif text-2xl tracking-widest">FILTERS</h2>
                <X onClick={() => setShowFilter(false)} className="w-6 h-6" />
             </div>
             <div className="space-y-10">
                <div>
                   <p className="mb-4 text-[10px] font-black text-[#8D7B68] uppercase tracking-widest">Collections</p>
                   <div className="flex flex-wrap gap-2">
                     {["Signature", "Limited Edition", "Artisan Series"].map(cat => (
                       <button key={cat} onClick={() => toggleCategory({target:{value:cat}})} className={`px-5 py-2.5 rounded-full border text-[10px] tracking-widest uppercase transition-all ${category.includes(cat) ? "bg-[#2C261F] text-white" : "text-gray-500"}`}>{cat}</button>
                     ))}
                   </div>
                </div>
                <div>
                   <p className="mb-4 text-[10px] font-black text-[#8D7B68] uppercase tracking-widest">Artifact Type</p>
                   <div className="flex flex-wrap gap-2">
                     {["Necklace", "Bangles", "Earrings", "Rings"].map(type => (
                       <button key={type} onClick={() => toggleSubCategory({target:{value:type}})} className={`px-5 py-2.5 rounded-full border text-[10px] tracking-widest uppercase transition-all ${subCategory.includes(type) ? "bg-[#2C261F] text-white" : "text-gray-500"}`}>{type}</button>
                     ))}
                   </div>
                </div>
             </div>
             <button onClick={() => setShowFilter(false)} className="w-full py-5 bg-[#2C261F] text-white text-[10px] font-bold tracking-[0.4em] uppercase mt-12 rounded-2xl">Apply</button>
          </motion.div>
        )}
        {showSortDrawer && (
          <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "spring", damping: 25 }} className="fixed bottom-0 inset-x-0 z-[70] bg-white rounded-t-[3rem] p-8 sm:hidden">
             <h2 className="font-serif text-2xl tracking-widest mb-8 text-center">SORT BY</h2>
             <div className="flex flex-col gap-4">
                {[ {label: "Relevant", value: "relevant"}, {label: "Price: Low to High", value: "low-high"}, {label: "Price: High to Low", value: "high-low"} ].map((opt) => (
                  <button key={opt.value} onClick={() => {setSortType(opt.value); setShowSortDrawer(false)}} className={`w-full py-4 rounded-xl text-[11px] font-bold tracking-widest uppercase transition-all ${sortType === opt.value ? "bg-[#F9F7F4] text-[#2C261F] border border-[#8D7B68]/20" : "text-gray-400"}`}>
                    {opt.label}
                  </button>
                ))}
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex-1 w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <Title text1={"THE"} text2={"COLLECTION"} />
          <div className="hidden sm:block relative">
            <select onChange={(e) => setSortType(e.target.value)} className="appearance-none bg-white border border-gray-100 rounded-2xl text-[10px] font-black tracking-widest px-8 py-4 pr-14 focus:outline-none shadow-sm uppercase cursor-pointer">
              <option value="relevant">SORT BY: RELEVANT</option>
              <option value="low-high">PRICE: LOW TO HIGH</option>
              <option value="high-low">PRICE: HIGH TO LOW</option>
            </select>
            <ChevronRight className="absolute right-6 top-1/2 -translate-y-1/2 rotate-90 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <motion.div layout className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-8">
          <AnimatePresence>
            {filterProducts.map((item) => (
              <motion.div 
                layout 
                key={item._id} 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="group relative"
              >
                <div className="bg-white rounded-[2.2rem] p-2 border border-transparent hover:border-[#8D7B68]/20 transition-all duration-500 shadow-sm hover:shadow-xl">
                  <div className="relative overflow-hidden rounded-[1.8rem] aspect-[3/4]">
                    
                    {/* cliCkable Arrea */}
                    <div 
                      className="absolute inset-0 z-10 sm:hidden" 
                      onClick={() => setActiveCard(activeCard === item._id ? null : item._id)}
                    ></div>

                    <ProductItem id={item._id} name={item.name} price={item.price} image={item.image} />
                    
                    {/* Button Overlay */}
                    <div className={`absolute inset-0 bg-black/20 backdrop-blur-[2px] transition-all duration-500 flex flex-col items-center justify-center gap-4 z-20 ${activeCard === item._id ? "opacity-100 visible" : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"}`}>
                       <button 
                        onClick={(e) => { e.stopPropagation(); addToCart(item._id, "Standard"); }} 
                        className="bg-white p-4 rounded-full text-[#2C261F] hover:bg-[#2C261F] hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 shadow-lg"
                       >
                          <ShoppingBag className="w-5 h-5" />
                       </button>
                       <button 
                        onClick={(e) => { e.stopPropagation(); navigate(`/product/${item._id}`); }} 
                        className="bg-white/90 px-6 py-2.5 rounded-full text-[10px] font-black tracking-widest uppercase text-[#2C261F] transform translate-y-4 group-hover:translate-y-0 delay-75 shadow-lg"
                       >
                          Details
                       </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <style jsx>{` .font-serif { font-family: 'Prata', serif; } `}</style>
    </div>
  );
};

export default Collection;