import { motion } from 'framer-motion';

const NetworkSection = () => {
  return (
    <section className="w-full bg-white pt-4 pb-10 md:pt-8 md:pb-20 px-6">
      <div className="relative w-full max-w-[1280px] mx-auto flex items-center justify-center">
        {/* Full Image */}
        <img 
          src="https://lebiryprumdaarwlhqxr.supabase.co/storage/v1/object/public/jusswapImages/Hero/background.jpg"
          alt="Network Background"
          className="w-full h-auto object-contain"
        />
        
        {/* Content Overlay */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8 }} 
          viewport={{ once: true }} 
          className="absolute inset-0 flex flex-col items-center justify-center px-4 md:px-6 w-full text-center mt-[-4%] md:mt-[-40px]"
        >
          {/* Caption */}
          <p className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3 md:mb-6 lg:mb-8">
            1.2M+ CUSTOMERS
          </p>
          
          {/* Main Title */}
          <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-[60px] xl:text-[68px] font-medium text-[#111111] leading-[1.2] tracking-tight">
            “ A network where people <br className="hidden sm:block" />
            connect, share, and <span className="text-[#8B5CF6]">swap</span> <br className="hidden sm:block" />
            smarter ”
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default NetworkSection;
