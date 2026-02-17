import React, { useState, useEffect } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { 
  MessageSquare, 
  Search, 
  Trash2, 
  Mail, 
  User, 
  Clock, 
  CheckCheck, 
  Reply,
  MoreVertical
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Messages = ({ token }) => {
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // প্রফেশনাল ক্লায়েন্ট ইনকোয়ারি ডেমো ডেটা
  const demoMessages = [
    {
      _id: "msg_01",
      name: "Eleanor Vance",
      email: "eleanor.v@vogue.com",
      subject: "Bespoke Bridal Collection Inquiry",
      message: "Greetings, I am interested in a customized 22k gold bangle set for an upcoming editorial shoot. Do you provide express craftsmanship for high-profile clients?",
      date: new Date().toISOString(),
    },
    {
      _id: "msg_02",
      name: "Julian Thorne",
      email: "thorne.j@manor.co",
      subject: "Sizing Consultation for Heritage Cuff",
      message: "I recently viewed the Heritage Silver Cuff. I'm unsure about the size 2-6. Could you provide the exact inner circumference in millimeters?",
      date: new Date(Date.now() - 86400000).toISOString(),
    },
    {
      _id: "msg_03",
      name: "Sophia Rossi",
      email: "s.rossi@milan.it",
      subject: "Private Gallery Viewing Request",
      message: "I will be visiting the city next month and would love to see the Stellify Elite collection in person. Is a private appointment required?",
      date: new Date(Date.now() - 172800000).toISOString(),
    }
  ];

  const fetchMessages = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/contact/list", { headers: { token } });
      if (response.data.success && response.data.messages.length > 0) {
        setMessages(response.data.messages.reverse());
      } else {
        setMessages(demoMessages); // ব্যাকএন্ড খালি থাকলে ডেমো দেখাবে
      }
    } catch (error) {
      setMessages(demoMessages); // এরর হলে ডেমো দেখাবে
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [token]);

  // ডেমো মেসেজ ডিলিট করার সিমুলেশন
  const deleteMessage = (id) => {
    if(window.confirm("Archiving this conversation?")) {
      setMessages(prev => prev.filter(m => m._id !== id));
      if(selectedMessage?._id === id) setSelectedMessage(null);
      toast.info("Conversation moved to archive");
    }
  };

  const filteredMessages = messages.filter(msg => 
    msg.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    msg.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-[calc(100vh-160px)] flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="font-serif text-4xl text-[#2C261F] mb-1 tracking-tight italic">Concierge Inbox</h2>
          <p className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-400">Manage Private Client Inquiries</p>
        </div>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
          <input 
            type="text"
            placeholder="Search conversations..."
            className="pl-12 pr-6 py-3 bg-white border border-slate-100 rounded-2xl text-sm focus:ring-1 focus:ring-[#8D7B68] outline-none w-full md:w-80 shadow-sm"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-1 bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden">
        
        {/* Messages List Sidebar */}
        <div className="w-full md:w-[40%] border-r border-slate-50 overflow-y-auto">
          <div className="divide-y divide-slate-50">
            {filteredMessages.map((msg) => (
              <div 
                key={msg._id}
                onClick={() => setSelectedMessage(msg)}
                className={`p-6 cursor-pointer transition-all hover:bg-[#F9F7F4]/50 ${selectedMessage?._id === msg._id ? 'bg-[#F9F7F4] border-l-4 border-l-[#8D7B68]' : ''}`}
              >
                <div className="flex justify-between mb-2">
                  <p className="text-[11px] font-black uppercase tracking-widest text-[#2C261F]">{msg.name}</p>
                  <span className="text-[9px] text-slate-400 font-bold uppercase">{new Date(msg.date).toLocaleDateString()}</span>
                </div>
                <h4 className="text-sm font-bold text-[#2C261F] mb-1 truncate">{msg.subject}</h4>
                <p className="text-xs text-slate-400 line-clamp-1 italic">{msg.message}</p>
              </div>
            ))}
            {filteredMessages.length === 0 && (
              <div className="p-10 text-center">
                <p className="text-slate-300 font-serif italic">No conversations found</p>
              </div>
            )}
          </div>
        </div>

        {/* Message Content View */}
        <div className="hidden md:flex flex-col flex-1 bg-[#F9F7F4]/20">
          <AnimatePresence mode="wait">
            {selectedMessage ? (
              <motion.div 
                key={selectedMessage._id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col h-full"
              >
                {/* Message Detail Header */}
                <div className="p-8 bg-white border-b border-slate-50 flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#EAE3DC] flex items-center justify-center font-bold text-[#2C261F] text-xl shadow-inner border border-white">
                      {selectedMessage.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#2C261F]">{selectedMessage.name}</h3>
                      <p className="text-xs text-[#8D7B68] font-medium tracking-wide uppercase">{selectedMessage.email}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => deleteMessage(selectedMessage._id)}
                      className="p-3 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                    >
                      <Trash2 size={20} />
                    </button>
                    <button className="p-3 text-slate-300 hover:text-[#2C261F] hover:bg-slate-50 rounded-xl transition-all">
                      <MoreVertical size={20} />
                    </button>
                  </div>
                </div>

                {/* Message Body */}
                <div className="flex-1 p-10 overflow-y-auto">
                  <div className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] mb-6">
                    <div className="flex items-center gap-2 mb-8 text-[#8D7B68]">
                       <Clock size={14} />
                       <span className="text-[10px] font-black uppercase tracking-[0.2em]">Inquiry Logged: {new Date(selectedMessage.date).toLocaleString()}</span>
                    </div>
                    <h2 className="text-2xl font-serif text-[#2C261F] mb-8 italic border-l-4 border-[#D4AF37] pl-6 leading-tight">
                      {selectedMessage.subject}
                    </h2>
                    <p className="text-[#4A4238] leading-relaxed whitespace-pre-line text-[15px] font-medium opacity-90">
                      {selectedMessage.message}
                    </p>
                  </div>
                </div>

                {/* Action Footer */}
                <div className="p-8 bg-white border-t border-slate-50 flex gap-4">
                  <button className="flex-1 bg-[#2C261F] text-white py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] flex items-center justify-center gap-3 hover:bg-[#1A1714] shadow-lg shadow-black/10 transition-all">
                    <Reply size={16} /> Draft Response
                  </button>
                  <button className="px-8 py-4 bg-[#F9F7F4] text-[#8D7B68] rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#EAE3DC] border border-slate-100 transition-all">
                    Mark Resolved
                  </button>
                </div>
              </motion.div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-slate-300 bg-white/50">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <MessageSquare size={64} strokeWidth={1} className="mb-6 opacity-20" />
                </motion.div>
                <p className="font-serif italic text-xl text-[#8D7B68]">Select a conversation to engage</p>
                <p className="text-[9px] uppercase tracking-[0.4em] mt-4 opacity-40">Atelier Private Communication Center</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <style jsx>{` .font-serif { font-family: 'Prata', serif; } `}</style>
    </div>
  );
};

export default Messages;