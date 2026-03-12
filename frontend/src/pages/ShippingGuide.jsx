import React from 'react';
import { motion } from 'framer-motion';

const ShippingGuide = () => {
  const shippingMethods = [
    {
      region: "Domestic (USA)",
      standard: "3-5 Business Days",
      express: "1-2 Business Days",
      cost: "Free on orders over $500"
    },
    {
      region: "International (EU & UK)",
      standard: "7-10 Business Days",
      express: "3-5 Business Days",
      cost: "Calculated at Checkout"
    },
    {
      region: "Rest of World",
      standard: "10-14 Business Days",
      express: "5-7 Business Days",
      cost: "Calculated at Checkout"
    }
  ];

  return (
    <div className="bg-[#F9F7F4] text-[#2C261F] min-h-screen pt-28 pb-20 px-6 md:px-16">
      <div className="container mx-auto max-w-5xl">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-[10px] tracking-[0.6em] text-[#8D7B68] font-bold uppercase mb-4 block text-center">Logistics & Care</span>
          <h1 className="text-4xl md:text-5xl font-serif text-center tracking-tight mb-6">Shipping & Delivery</h1>
          <div className="w-16 h-[1px] bg-[#8D7B68]/40 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-sm font-black tracking-[0.3em] uppercase text-[#8D7B68]">Handling Time</h3>
            <p className="text-[#4A4238] leading-relaxed opacity-80 text-sm">
              Each Stellify piece is meticulously inspected and hand-packaged in our atelier. 
              Orders are typically processed within 24-48 hours. For bespoke or made-to-order items, 
              please allow up to 7 business days for craftsmanship before dispatch.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-sm font-black tracking-[0.3em] uppercase text-[#8D7B68]">Insured Luxury</h3>
            <p className="text-[#4A4238] leading-relaxed opacity-80 text-sm">
              All shipments are fully insured and require a signature upon delivery to ensure 
              your masterpiece reaches you safely. We partner with premium couriers like 
              FedEx Luxury Link and DHL Express for global transit.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="overflow-x-auto border border-[#8D7B68]/10 rounded-sm bg-white/30 backdrop-blur-sm"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#8D7B68]/10">
                <th className="p-6 text-[10px] tracking-widest uppercase font-bold text-[#8D7B68]">Region</th>
                <th className="p-6 text-[10px] tracking-widest uppercase font-bold text-[#8D7B68]">Standard</th>
                <th className="p-6 text-[10px] tracking-widest uppercase font-bold text-[#8D7B68]">Express</th>
                <th className="p-6 text-[10px] tracking-widest uppercase font-bold text-[#8D7B68]">Shipping Cost</th>
              </tr>
            </thead>
            <tbody>
              {shippingMethods.map((method, index) => (
                <tr key={index} className="border-b border-[#8D7B68]/5 hover:bg-[#FDFCFB] transition-colors">
                  <td className="p-6 text-xs font-bold tracking-wider">{method.region}</td>
                  <td className="p-6 text-xs text-[#4A4238]">{method.standard}</td>
                  <td className="p-6 text-xs text-[#4A4238]">{method.express}</td>
                  <td className="p-6 text-xs italic text-[#8D7B68]">{method.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 p-12 bg-[#2C261F] text-[#F9F7F4] text-center rounded-sm"
        >
          <h4 className="font-serif text-2xl mb-4 italic">Tracking Your Treasure</h4>
          <p className="text-sm opacity-70 max-w-2xl mx-auto leading-relaxed mb-8">
            Once your order leaves our atelier, you will receive a confirmation email with a 
            unique tracking number and a link to monitor its journey in real-time.
          </p>
          <button className="px-10 py-4 border border-[#F9F7F4]/30 text-[10px] tracking-[0.4em] uppercase hover:bg-[#F9F7F4] hover:text-[#2C261F] transition-all duration-500">
            Contact Concierge
          </button>
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

export default ShippingGuide;