import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contexts/ShopContext";
import ProductItem from "./ProductItem";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper/modules";
import { useNavigate } from "react-router-dom"; 

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();
      productsCopy = productsCopy.filter((item) => category === item.category);
      productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);
      setRelated(productsCopy.slice(0, 10));
    }
  }, [products, category, subCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-32 overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="h-[1px] w-8 bg-[#8D7B68]"></span>
            <span className="text-[#8D7B68] text-xs font-bold tracking-[0.3em] uppercase">
              Curated Selection
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-[#2C261F] leading-tight">
            Complete The <span className="italic font-light text-[#8D7B68]/70">Look</span>
          </h2>
          <p className="text-gray-500 text-sm mt-4 md:max-w-[400px] font-light leading-relaxed">
            Discover pieces hand-selected by our stylists to perfectly complement your choice.
          </p>
        </motion.div>

        {/* Custom Navigation Buttons */}
        <div className="hidden md:flex gap-4 mb-2">
          <button className="swiper-button-prev-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#2C261F] hover:text-white hover:scale-110 transition-all duration-500 cursor-pointer z-10">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button className="swiper-button-next-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#2C261F] hover:text-white hover:scale-110 transition-all duration-500 cursor-pointer z-10">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>

      <div className="relative group/slider">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, FreeMode]}
          speed={1000} 
          spaceBetween={20}
          slidesPerView={1.5}
          loop={related.length > 5}
          freeMode={true}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          pagination={{
            clickable: true,
            el: '.custom-pagination'
          }}
          breakpoints={{
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          className="!pb-24" // Added extra padding to prevent overlap
        >
          {related.map((item) => (
            <SwiperSlide key={item._id}>
              <div 
                onClick={() => navigate(`/product/${item._id}`)}
                className="relative bg-white rounded-[2.5rem] overflow-hidden group/card border border-gray-50 cursor-pointer transition-all duration-700 hover:shadow-[0_20px_50px_rgba(141,123,104,0.15)]"
              >
                <div className="relative overflow-hidden aspect-[3/4]">
                  <div className="h-full w-full transition-transform duration-1000 group-hover/card:scale-110">
                    <ProductItem 
                      id={item._id} 
                      name={item.name} 
                      price={item.price} 
                      image={item.image} 
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="absolute inset-0 flex items-end justify-center pb-8 opacity-0 translate-y-4 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-500 pointer-events-none">
                    <span className="bg-white/95 backdrop-blur-md text-[#2C261F] text-[10px] font-black tracking-[0.2em] uppercase py-3 px-8 rounded-full shadow-lg">
                      View Details
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Improved Pagination Indicator */}
        <div className="custom-pagination flex justify-center mt-4 h-4" />
      </div>

      <style jsx global>{`
        /* Step 1 & 2: Smooth Elastic Pagination & Color Matching */
        .custom-pagination .swiper-pagination-bullet {
          background: #E5E1DA !important; 
          opacity: 1;
          width: 8px;
          height: 8px;
          margin: 0 6px !important;
          transition: all 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55) !important; 
          border: 1px solid rgba(141, 123, 104, 0.1);
          cursor: pointer;
        }

        .custom-pagination .swiper-pagination-bullet-active {
          background: #8D7B68 !important; 
          width: 34px !important;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(141, 123, 104, 0.2);
        }

        .font-serif { font-family: 'Prata', serif; }
      `}</style>
    </div>
  );
};

export default RelatedProducts;