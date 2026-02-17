import React, { useState, useEffect } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { Users, Mail, Phone, ShoppingCart, Search, ExternalLink } from "lucide-react";

const Clients = ({ token }) => {
  const [clients, setClients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchClients = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/user/list", { headers: { token } });
      if (response.data.success) {
        setClients(response.data.users);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchClients();
  }, [token]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="font-serif text-4xl text-[#2C261F] mb-1 tracking-tight">Distinguished Clients</h2>
          <p className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-400">Total Registered Members: {clients.length}</p>
        </div>
        
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
          <input 
            type="text"
            placeholder="Search by name or email..."
            className="pl-12 pr-6 py-3 bg-white border border-slate-100 rounded-2xl text-sm focus:ring-1 focus:ring-[#8D7B68] outline-none w-full md:w-80 shadow-sm"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#F9F7F4]/50 border-b border-slate-50">
              <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Client Profile</th>
              <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Contact Details</th>
              <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Acquisitions</th>
              <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Status</th>
              <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {clients.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase())).map((client, index) => (
              <tr key={index} className="hover:bg-[#F9F7F4]/20 transition-colors group">
                <td className="px-8 py-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#EAE3DC] flex items-center justify-center font-bold text-[#2C261F]">
                      {client.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#2C261F]">{client.name}</p>
                      <p className="text-[10px] text-slate-400 uppercase tracking-tighter">Member since 2024</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <div className="space-y-1">
                    <p className="text-[12px] text-slate-600 flex items-center gap-2"><Mail size={12} className="text-[#8D7B68]" /> {client.email}</p>
                    <p className="text-[12px] text-slate-600 flex items-center gap-2"><Phone size={12} className="text-[#8D7B68]" /> +880 1234 567</p>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <div className="flex items-center gap-2">
                    <ShoppingCart size={14} className="text-slate-300" />
                    <span className="text-sm font-bold text-[#2C261F]">12 Orders</span>
                  </div>
                </td>
                <td className="px-8 py-6">
                   <span className="bg-emerald-50 text-emerald-600 text-[10px] font-black px-3 py-1 rounded-full uppercase">Elite Member</span>
                </td>
                <td className="px-8 py-6 text-right">
                  <button className="p-2 text-slate-300 hover:text-[#8D7B68] transition-all">
                    <ExternalLink size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <style jsx>{` .font-serif { font-family: 'Prata', serif; } `}</style>
    </div>
  );
};

export default Clients;