import { Star } from 'lucide-react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center overflow-hidden bg-white">
      {/* Subtle Background Glow/Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#f3edff] via-white to-white opacity-60"></div>
      
      <div className="w-full max-w-[1280px] mx-auto px-6 py-12 md:py-20 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
        
        {/* Left Side: Content Hierarchy */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="flex-1 w-full max-w-[640px] flex flex-col items-start z-10"
        >
          
          {/* Main Typography Funnel */}
          <motion.h1 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="text-5xl lg:text-[64px] font-extrabold leading-[1.15] tracking-tight text-dark-green mb-6"
          >
            <span className="text-primary-purple">Swap</span> what you don't need.<br />
            Get what you actually <span className="text-primary-purple">want.</span>
          </motion.h1>
          
          <motion.p 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="text-lg sm:text-xl text-text-muted font-medium max-w-[500px] leading-relaxed mb-10"
          >
            Stop spending on new things. Start swapping for better ones with the fastest growing community.
          </motion.p>

          {/* Call to Actions (App Badges) */}
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-12 w-full sm:w-auto"
          >
            {/* Apple App Store */}
            <button className="group w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl bg-black text-white hover:bg-[#1a1a1a] hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(0,0,0,0.15)] transition-all duration-300 active:scale-95">
              <FaApple className="text-[30px] shrink-0" />
              <div className="text-left flex flex-col">
                <span className="text-[11px] font-medium tracking-wide text-gray-300 leading-none mb-1">Download on the</span>
                <span className="text-[18px] font-bold leading-none">App Store</span>
              </div>
            </button>

            {/* Google Play */}
            <button className="group w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl bg-white border-2 border-gray-100 text-black hover:border-gray-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(0,0,0,0.05)] transition-all duration-300 active:scale-95">
              <FaGooglePlay className="text-[26px] text-gray-800 shrink-0 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-left flex flex-col">
                <span className="text-[11px] font-medium tracking-wide text-gray-500 leading-none mb-1">GET IT ON</span>
                <span className="text-[18px] font-bold leading-none">Google Play</span>
              </div>
            </button>
          </motion.div>

          {/* Social Proof (Trust Indicators) */}
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="flex items-center gap-5 pt-6 border-t border-gray-100 w-full max-w-[400px]"
          >
            <div className="flex -space-x-3 hover:space-x-[-8px] transition-all duration-300 cursor-pointer">
              <img className="w-11 h-11 rounded-full border-[3px] border-white object-cover shadow-sm relative z-30" src="https://i.pravatar.cc/100?img=1" alt="User 1" />
              <img className="w-11 h-11 rounded-full border-[3px] border-white object-cover shadow-sm relative z-20" src="https://i.pravatar.cc/100?img=2" alt="User 2" />
              <img className="w-11 h-11 rounded-full border-[3px] border-white object-cover shadow-sm relative z-10" src="https://i.pravatar.cc/100?img=3" alt="User 3" />
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-1 mb-1 text-[#FFD500]">
                <Star size={16} className="fill-current" />
                <Star size={16} className="fill-current" />
                <Star size={16} className="fill-current" />
                <Star size={16} className="fill-current" />
                <Star size={16} className="fill-[#FFD500] opacity-50" />
              </div>
              <span className="text-[13px] font-semibold text-dark-green tracking-tight">
                Rated 4.0 on Jusswap
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Hero Image Presentation */}
        {/* Using relative positioning to break the grid slightly for a more dynamic UI feel */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full relative content-center flex justify-center lg:justify-end lg:-mr-12 xl:-mr-24 perspective-1000"
        >
          
          {/* Decorative blur blob behind image to make it pop */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-primary-purple/20 rounded-full blur-[80px] -z-10"></div>
          
          <img 
            src="https://lebiryprumdaarwlhqxr.supabase.co/storage/v1/object/public/jusswapImages/Hero/hero%20Section%20Image.svg" 
            alt="Jusswap App Interface" 
            className="w-full max-w-[600px] lg:max-w-[750px] h-auto object-contain z-10 drop-shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-700 ease-out"
            style={{ 
              filter: 'drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))'
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
