import React, { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { Upload, Plus, X, Sparkles, Gem, Info, DollarSign } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Bangles");
  const [subCategory, setSubCategory] = useState("Handcrafted");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  // Dynamic Size Logic for Luxury Categories
  const getAvailableSizes = () => {
    switch (category) {
      case "Rings": return ["5", "6", "7", "8", "9", "Adjustable"];
      case "Bangles": return ["2.2", "2.4", "2.6", "2.8", "Adjustable"];
      case "Necklaces": return ["16\"", "18\"", "20\"", "24\"", "Choker"];
      default: return ["Standard", "Custom"];
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success("Masterpiece Archived in Inventory");
        setName("");
        setDescription("");
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setPrice("");
        setSizes([]);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-10 pb-20">
      <div className="flex flex-col gap-1">
        <h2 className="font-serif text-4xl text-[#2C261F] italic tracking-tight">Curate New Artifact</h2>
        <p className="text-[10px] font-black tracking-[0.4em] uppercase text-slate-400">Inventory Acquisition System</p>
      </div>

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        onSubmit={onSubmitHandler}
        className="grid grid-cols-1 lg:grid-cols-3 gap-10"
      >
        {/* Left Column: Visual Assets */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm">
            <p className="text-[11px] font-black tracking-[0.3em] uppercase text-slate-400 mb-6 flex items-center gap-2">
              <Gem size={12} className="text-[#8D7B68]" /> Visual Artifacts
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[image1, image2, image3, image4].map((img, index) => {
                const setImgFunc = [setImage1, setImage2, setImage3, setImage4][index];
                const id = `image${index + 1}`;
                return (
                  <label key={id} htmlFor={id} className="relative aspect-[3/4] group cursor-pointer overflow-hidden rounded-2xl bg-[#F9F7F4] border-2 border-dashed border-slate-100 hover:border-[#8D7B68] transition-all">
                    {img ? (
                      <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={URL.createObjectURL(img)} alt="preview" />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-300">
                        <Upload size={20} className="mb-2 group-hover:text-[#8D7B68]" />
                        <span className="text-[8px] font-bold uppercase tracking-widest">Upload</span>
                      </div>
                    )}
                    <input onChange={(e) => setImgFunc(e.target.files[0])} type="file" id={id} hidden />
                  </label>
                );
              })}
            </div>
          </div>

          <div className="bg-[#2C261F] p-8 rounded-[40px] text-white overflow-hidden relative group">
             <div className="relative z-10">
                <p className="text-[10px] font-black tracking-[0.3em] uppercase text-[#8D7B68] mb-4">Pro-Tip</p>
                <p className="text-xs text-white/70 leading-relaxed italic">
                  "High-resolution close-ups of gemstones increase client trust by 40%."
                </p>
             </div>
             <Sparkles className="absolute -right-4 -bottom-4 text-white/5 group-hover:text-white/10 transition-all" size={120} />
          </div>
        </div>

        {/* Right Column: Information Details */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-10 md:p-14 rounded-[48px] border border-slate-100 shadow-sm space-y-10">
            
            {/* Name & Valuation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[11px] font-black tracking-[0.3em] uppercase text-slate-400 ml-1">Creation Name</label>
                <input
                  className="w-full bg-[#F9F7F4] border-none px-6 py-4 rounded-2xl text-sm focus:ring-1 focus:ring-[#8D7B68] outline-none font-medium"
                  type="text" placeholder="e.g. Royal Heritage Necklace"
                  onChange={(e) => setName(e.target.value)} value={name} required
                />
              </div>
              <div className="space-y-3">
                <label className="text-[11px] font-black tracking-[0.3em] uppercase text-slate-400 ml-1">Valuation</label>
                <div className="relative">
                  <span className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 font-serif text-sm">$</span>
                  <input
                    className="w-full bg-[#F9F7F4] border-none pl-12 pr-6 py-4 rounded-2xl text-sm focus:ring-1 focus:ring-[#8D7B68] outline-none font-bold"
                    type="Number" placeholder="0.00"
                    onChange={(e) => setPrice(e.target.value)} value={price} required
                  />
                </div>
              </div>
            </div>

            {/* Narrative */}
            <div className="space-y-3">
              <label className="text-[11px] font-black tracking-[0.3em] uppercase text-slate-400 ml-1">The Narrative</label>
              <textarea
                className="w-full bg-[#F9F7F4] border-none px-6 py-5 rounded-[24px] text-sm min-h-[140px] focus:ring-1 focus:ring-[#8D7B68] outline-none leading-relaxed italic"
                placeholder="Describe the soul of this artifact..."
                onChange={(e) => setDescription(e.target.value)} value={description} required
              />
            </div>

            {/* Classification */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[11px] font-black tracking-[0.3em] uppercase text-slate-400 ml-1">Collection</label>
                <select
                  onChange={(e) => {setCategory(e.target.value); setSizes([]);}}
                  value={category}
                  className="w-full bg-[#F9F7F4] border-none px-6 py-4 rounded-2xl text-sm outline-none cursor-pointer font-bold text-[#2C261F] appearance-none"
                >
                  <option value="Bangles">Bangles</option>
                  <option value="Necklaces">Necklaces</option>
                  <option value="Earrings">Earrings</option>
                  <option value="Rings">Rings</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-[11px] font-black tracking-[0.3em] uppercase text-slate-400 ml-1">Atelier Genre</label>
                <select
                  onChange={(e) => setSubCategory(e.target.value)}
                  value={subCategory}
                  className="w-full bg-[#F9F7F4] border-none px-6 py-4 rounded-2xl text-sm outline-none cursor-pointer font-bold text-[#2C261F] appearance-none"
                >
                  <option value="Handcrafted">Handcrafted Archive</option>
                  <option value="Bridal Couture">Bridal Couture</option>
                  <option value="Daily Luxury">Daily Luxury</option>
                </select>
              </div>
            </div>

            {/* Dynamic Dimensions */}
            <div className="space-y-6">
              <p className="text-[11px] font-black tracking-[0.3em] uppercase text-slate-400 ml-1">Available Dimensions</p>
              <div className="flex flex-wrap gap-3">
                {getAvailableSizes().map((dim) => (
                  <motion.div
                    whileTap={{ scale: 0.95 }}
                    key={dim}
                    onClick={() =>
                      setSizes((prev) =>
                        prev.includes(dim) ? prev.filter((item) => item !== dim) : [...prev, dim]
                      )
                    }
                    className={`h-14 px-8 flex items-center justify-center cursor-pointer rounded-2xl text-[10px] font-black tracking-[0.2em] transition-all border ${
                      sizes.includes(dim) 
                      ? "bg-[#2C261F] text-white border-[#2C261F] shadow-xl" 
                      : "bg-white text-slate-400 border-slate-100 hover:border-[#8D7B68] hover:text-[#2C261F]"
                    }`}
                  >
                    {dim}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bestseller Check */}
            <div 
              onClick={() => setBestseller(!bestseller)}
              className="flex items-center justify-between p-6 bg-[#F9F7F4] rounded-3xl cursor-pointer group"
            >
              <div className="flex items-center gap-4">
                 <div className={`p-2 rounded-xl transition-all ${bestseller ? 'bg-[#2C261F] text-white' : 'bg-white text-slate-200'}`}>
                    <Sparkles size={18} />
                 </div>
                 <div>
                    <p className="text-[10px] font-black tracking-widest uppercase text-[#2C261F]">Featured Piece</p>
                    <p className="text-[9px] text-slate-400 font-bold uppercase">Mark as Boutique Bestseller</p>
                 </div>
              </div>
              <div className={`w-12 h-6 rounded-full transition-all relative ${bestseller ? 'bg-emerald-500' : 'bg-slate-200'}`}>
                 <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${bestseller ? 'right-1' : 'left-1'}`}></div>
              </div>
            </div>

            <button 
              className="w-full py-6 bg-[#2C261F] text-white text-[11px] font-black tracking-[0.4em] uppercase rounded-[24px] shadow-2xl hover:bg-[#4A4238] transition-all flex items-center justify-center gap-3" 
              type="submit"
            >
              Archive Masterpiece
            </button>
          </div>
        </div>
      </motion.form>
      <style jsx>{` .font-serif { font-family: 'Prata', serif; } `}</style>
    </div>
  );
};

export default Add;