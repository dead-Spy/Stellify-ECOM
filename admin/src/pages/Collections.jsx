import React, { useState, useEffect } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { Gem, Plus, Trash2, Edit3, Image as ImageIcon, Search } from "lucide-react";
import { motion } from "framer-motion";

const Collections = ({ token }) => {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      image && formData.append("image", image);

      const response = await axios.post(
        backendUrl + "/api/collection/add",
        formData,
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success("New Collection Curated");
        setName("");
        setDescription("");
        setImage(false);
        fetchCollections();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
  };

  const fetchCollections = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/collection/list");
      if (response.data.success) {
        setList(response.data.collections);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const removeCollection = async (id) => {
    if (window.confirm("Are you sure you want to archive this collection?")) {
      try {
        const response = await axios.post(
          backendUrl + "/api/collection/remove",
          { id },
          { headers: { token } }
        );
        if (response.data.success) {
          toast.success("Collection Removed");
          await fetchCollections();
        }
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  useEffect(() => {
    fetchCollections();
  }, []);

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="font-serif text-4xl text-[#2C261F] mb-1 tracking-tight italic">Collections</h2>
          <p className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-400">Manage Jewelry Series & Themes</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* CREATE COLLECTION FORM */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-1 bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm h-fit"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-[#F9F7F4] rounded-lg text-[#8D7B68]">
              <Plus size={20} />
            </div>
            <h3 className="font-serif text-xl text-[#2C261F]">Curate New</h3>
          </div>

          <form onSubmit={onSubmitHandler} className="space-y-6">
            <div className="flex flex-col items-center justify-center">
              <label htmlFor="image" className="cursor-pointer group relative">
                <div className="w-32 h-32 bg-[#F9F7F4] rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center overflow-hidden group-hover:border-[#8D7B68] transition-all">
                  {image ? (
                    <img className="w-full h-full object-cover" src={URL.createObjectURL(image)} alt="" />
                  ) : (
                    <div className="text-center p-4">
                      <ImageIcon size={24} className="mx-auto text-slate-300 mb-2" />
                      <p className="text-[9px] font-black uppercase text-slate-400">Cover Image</p>
                    </div>
                  )}
                </div>
                <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden />
              </label>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black tracking-widest text-slate-400 uppercase ml-1">Collection Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="w-full px-4 py-3.5 bg-[#F9F7F4] border-none rounded-2xl text-sm focus:ring-1 focus:ring-[#8D7B68] outline-none font-medium"
                type="text"
                placeholder="e.g. Royal Bridal 2026"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black tracking-widest text-slate-400 uppercase ml-1">Theme Description</label>
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className="w-full px-4 py-3.5 bg-[#F9F7F4] border-none rounded-2xl text-sm focus:ring-1 focus:ring-[#8D7B68] outline-none font-medium min-h-[100px]"
                placeholder="Describe the essence of this collection..."
                required
              />
            </div>

            <button
              disabled={loading}
              className="w-full py-4 rounded-2xl text-[10px] font-black tracking-[0.3em] uppercase text-white bg-[#2C261F] hover:bg-[#4A4238] transition-all disabled:opacity-50"
              type="submit"
            >
              {loading ? "Curating..." : "Create Collection"}
            </button>
          </form>
        </motion.div>

        {/* COLLECTIONS LIST */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {list.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                key={index}
                className="bg-white group rounded-[32px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="h-48 overflow-hidden relative">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={item.image} alt={item.name} />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button onClick={() => removeCollection(item._id)} className="p-2 bg-white/90 backdrop-blur rounded-xl text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-sm">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-serif text-xl text-[#2C261F] mb-2">{item.name}</h4>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{item.description}</p>
                  <div className="mt-6 pt-6 border-t border-slate-50 flex justify-between items-center">
                    <span className="text-[10px] font-black tracking-widest text-slate-300 uppercase">Archive No. {index + 1}</span>
                    <button className="text-[10px] font-black tracking-widest text-[#8D7B68] uppercase hover:text-[#2C261F]">View Pieces</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{` .font-serif { font-family: 'Prata', serif; } `}</style>
    </div>
  );
};

export default Collections;