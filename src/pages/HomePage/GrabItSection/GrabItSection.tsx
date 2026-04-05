import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { motion } from 'framer-motion';

const GrabItSection = () => {
  return (
    <section className="w-full bg-white py-20 px-6 mt-10">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-[800px] mx-auto flex flex-col items-center text-center"
      >
        
        {/* Custom Semicircle Logo Animation/Graphic */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <div className="w-[48px] md:w-[60px] h-[96px] md:h-[120px] bg-[#B599FF] rounded-l-[120px] rounded-r-none"></div>
          <div className="w-[48px] md:w-[60px] h-[96px] md:h-[120px] bg-[#6B4CFA] rounded-r-[120px] rounded-l-none rotate-180 ml-[-5px]"></div>
        </div>

        {/* Headings */}
        <h2 className="text-4xl md:text-[56px] font-bold text-[#111111] leading-[1.1] mb-6 tracking-tight">
          Love Application? Save<br className="hidden sm:block" /> by grab it today
        </h2>
        <p className="text-[17px] md:text-[19px] text-[#666666] font-medium leading-relaxed mb-12">
          Download It And Swap The Stuffs
        </p>

        {/* Download Buttons (Reused from Hero/Bento2) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
           {/* App Store */}
           <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl bg-black text-white hover:bg-[#1a1a1a] hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(0,0,0,0.15)] transition-all duration-300">
             <FaApple className="text-[28px] shrink-0 mb-1" />
             <div className="text-left flex flex-col">
               <span className="text-[10px] font-medium tracking-wide text-gray-300 leading-none mb-1">Download on the</span>
               <span className="text-[16px] font-bold leading-none tracking-wide">App Store</span>
             </div>
           </button>
           
           {/* Google Play */}
           <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl bg-white border border-gray-200 text-black hover:bg-gray-50 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(0,0,0,0.05)] transition-all duration-300">
             <FaGooglePlay className="text-[22px] text-gray-800 shrink-0" />
             <div className="text-left flex flex-col">
               <span className="text-[10px] font-medium tracking-wide text-gray-500 leading-none mb-1 uppercase">Get it on</span>
               <span className="text-[16px] font-bold leading-none tracking-wide">Google Play</span>
             </div>
           </button>
        </div>

      </motion.div>
    </section>
  );
};

export default GrabItSection;
