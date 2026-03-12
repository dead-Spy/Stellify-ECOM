import React, { useState } from "react";
import { 
  User, 
  Mail, 
  Lock, 
  ShieldCheck, 
  BellRing, 
  Camera, 
  Save,
  KeyRound
} from "lucide-react";
import { motion } from "framer-motion";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="space-y-10 pb-20">
      {/* Header */}
      <div>
        <h2 className="font-serif text-4xl text-[#2C261F] mb-1 tracking-tight italic">Atelier Settings</h2>
        <p className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-400">Manage Your Authority & Security</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        
        {/* Navigation Sidebar */}
        <div className="w-full lg:w-64 space-y-2">
          {[
            { id: "profile", label: "Profile Info", icon: User },
            { id: "security", label: "Security", icon: Lock },
            { id: "notifications", label: "Notifications", icon: BellRing },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${
                activeTab === tab.id 
                ? "bg-[#2C261F] text-white shadow-xl shadow-black/10" 
                : "bg-white text-slate-400 hover:bg-[#F9F7F4] hover:text-[#2C261F]"
              }`}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Settings Content Area */}
        <div className="flex-1 bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden">
          
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-10 md:p-14"
          >
            {activeTab === "profile" && (
              <div className="max-w-2xl space-y-8">
                <div className="flex items-center gap-8 mb-10">
                   <div className="relative group">
                      <div className="w-24 h-24 rounded-full bg-[#F9F7F4] flex items-center justify-center border-2 border-slate-100 overflow-hidden">
                         <User size={40} className="text-[#8D7B68]" />
                      </div>
                      <button className="absolute bottom-0 right-0 p-2 bg-[#2C261F] text-white rounded-full border-4 border-white hover:scale-110 transition-all">
                        <Camera size={14} />
                      </button>
                   </div>
                   <div>
                     <h3 className="font-serif text-2xl text-[#2C261F]">Master Artisan</h3>
                     <p className="text-xs text-slate-400 font-medium tracking-wide">Primary Administrator Access</p>
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-[10px] font-black tracking-widest text-slate-400 uppercase ml-1">Full Name</label>
                      <input className="w-full px-5 py-4 bg-[#F9F7F4] border-none rounded-2xl text-sm focus:ring-1 focus:ring-[#8D7B68] outline-none font-medium" type="text" defaultValue="Admin Atelier" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-black tracking-widest text-slate-400 uppercase ml-1">Email Address</label>
                      <input className="w-full px-5 py-4 bg-[#F9F7F4] border-none rounded-2xl text-sm focus:ring-1 focus:ring-[#8D7B68] outline-none font-medium" type="email" defaultValue="admin@stellify.com" />
                   </div>
                </div>

                <button className="flex items-center gap-2 bg-[#2C261F] text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#4A4238] transition-all">
                  <Save size={16} /> Update Profile
                </button>
              </div>
            )}

            {activeTab === "security" && (
              <div className="max-w-2xl space-y-8">
                <div className="flex items-center gap-3 mb-6 text-[#8D7B68]">
                   <KeyRound size={24} />
                   <h3 className="font-serif text-2xl text-[#2C261F]">Reset Authority Key</h3>
                </div>

                <div className="space-y-6">
                   <div className="space-y-2">
                      <label className="text-[10px] font-black tracking-widest text-slate-400 uppercase ml-1">Current Password</label>
                      <input className="w-full px-5 py-4 bg-[#F9F7F4] border-none rounded-2xl text-sm focus:ring-1 focus:ring-[#8D7B68] outline-none font-medium" type="password" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-black tracking-widest text-slate-400 uppercase ml-1">New Password</label>
                      <input className="w-full px-5 py-4 bg-[#F9F7F4] border-none rounded-2xl text-sm focus:ring-1 focus:ring-[#8D7B68] outline-none font-medium" type="password" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-black tracking-widest text-slate-400 uppercase ml-1">Confirm New Password</label>
                      <input className="w-full px-5 py-4 bg-[#F9F7F4] border-none rounded-2xl text-sm focus:ring-1 focus:ring-[#8D7B68] outline-none font-medium" type="password" />
                   </div>
                </div>

                <div className="bg-amber-50 p-6 rounded-[24px] border border-amber-100 flex gap-4">
                   <ShieldCheck className="text-amber-600 shrink-0" size={24} />
                   <p className="text-xs text-amber-700 leading-relaxed font-medium">
                     Changing your password will sign you out of all other active sessions for security purposes.
                   </p>
                </div>

                <button className="bg-[#2C261F] text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#4A4238] transition-all">
                  Update Password
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
      <style jsx>{` .font-serif { font-family: 'Prata', serif; } `}</style>
    </div>
  );
};

export default Settings;