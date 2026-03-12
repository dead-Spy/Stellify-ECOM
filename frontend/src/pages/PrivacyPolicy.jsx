import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Database, CreditCard, Lock, Mail } from 'lucide-react';

const NewPrivacyPolicy = () => {
  const sections = [
    {
      title: "Consent & Transparency",
      content: "By using our website, you consent to our collection and use of information. We strive for transparency, and this policy outlines our practices.",
      icon: ShieldCheck,
    },
    {
      title: "What We Collect",
      content: "We collect only the essential data to personalize your experience, including your name, email, shipping address, and order history.",
      icon: Database,
    },
    {
      title: "Secure Transactions",
      content: "All payments are processed through encrypted, PCI-compliant payment gateways. We do not store your full credit card information on our servers.",
      icon: CreditCard,
    },
    {
      title: "Data Protection",
      content: "We implement advanced security measures to protect your personal information from unauthorized access, disclosure, or misuse.",
      icon: Lock,
    },
    {
      title: "Your Data Rights",
      content: "You have the right to access, correct, or delete your personal information. Contact our data protection officer to exercise these rights.",
      icon: ShieldCheck,
    },
    {
      title: "Cookie Usage",
      content: "We use cookies to understand how you interact with our site, allowing us to enhance your browsing experience and improve our services.",
      icon: Database,
    },
    {
      title: "Third-Party Partners",
      content: "We may share information with trusted third-party partners for limited purposes, such as order fulfillment and marketing analysis.",
      icon: ShieldCheck,
    },
    {
      title: "Updates to Policy",
      content: "We may periodically update this privacy policy. We encourage you to review it regularly to stay informed.",
      icon: ShieldCheck,
    },
    {
      title: "Contact Us",
      content: "For any questions or concerns regarding your privacy, please reach out to our team.",
      icon: Mail,
    },
  ];

  return (
    <div className="bg-[#F9F7F4] text-[#2C261F] min-h-screen pt-28 pb-20 px-6 md:px-16 relative overflow-hidden">
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#8D7B68]/10 to-transparent"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#EAE3DC] blur-[120px] rounded-full pointer-events-none opacity-30"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <span className="text-[10px] tracking-[0.6em] text-[#8D7B68] font-bold uppercase mb-4 block">Trust & Integrity</span>
          <h1 className="text-4xl md:text-6xl font-serif tracking-tight mb-8">Our Privacy <br /> <span className="italic">Commitment</span></h1>
          <div className="w-24 h-[1px] bg-[#8D7B68]/30 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {sections.map((section, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-10 border border-[#8D7B68]/10 hover:border-[#8D7B68]/30 transition-all duration-500 bg-white/50 backdrop-blur-sm group rounded-xl shadow-inner hover:shadow-lg"
            >
              <div className="w-16 h-16 rounded-full border border-[#8D7B68]/10 flex items-center justify-center mb-8 group-hover:bg-[#F9F7F4] transition-colors">
                <section.icon className="w-8 h-8 text-[#8D7B68]/70 group-hover:text-[#2C261F]" />
              </div>
              <h3 className="text-xl font-serif italic tracking-wide mb-6 text-[#2C261F] group-hover:text-[#8D7B68] transition-colors">{section.title}</h3>
              <p className="text-sm text-[#4A4238] leading-relaxed opacity-80 font-medium tracking-wide text-justify md:text-left">{section.content}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="mt-40 text-center"
        >
          <div className="inline-block relative px-12 py-6">
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#8D7B68]"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#8D7B68]"></div>
            <p className="text-[10px] tracking-[0.8em] uppercase font-bold text-[#8D7B68]">Stellify Privacy Standards</p>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .font-serif {
          font-family: 'Prata', serif;
        }
      `}</style>
    </div>
  );
};

export default NewPrivacyPolicy;