import { motion } from 'framer-motion';

const BentoSection = () => {
  return (
    <section className="w-full bg-white pt-20 pb-10 lg:pb-12 px-6">
      <div className="w-full max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        
        {/* Top Full-Width Box */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="md:col-span-2 bg-[#F8F9FA] rounded-[32px] flex flex-col md:flex-row items-center border border-gray-100">
          
          {/* Left: Image Box 1 */}
          <div className="w-full md:w-1/2 flex justify-center items-center p-6 md:p-10">
            <img 
              src="https://lebiryprumdaarwlhqxr.supabase.co/storage/v1/object/public/jusswapImages/Hero/box1.svg" 
              alt="Jusswap App Interface" 
              className="w-full max-w-[400px] lg:max-w-[500px] h-auto object-contain drop-shadow-sm"
            />
          </div>
          
          {/* Right: Text Content */}
          <div className="w-full md:w-1/2 p-8 md:p-12 lg:pr-20 flex flex-col items-start text-left">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-semibold text-dark-green mb-4 leading-[1.15] tracking-tight">
              Why Use Jusswap?
            </h2>
            <p className="text-base lg:text-lg text-text-muted leading-relaxed mb-8 max-w-[440px]">
              Turn your unused items into something valuable. Discover what you need without spending money. Swap, connect, and live smarter with Jusswap.
            </p>
            <button className="px-6 py-3 bg-black text-white rounded-xl font-medium hover:bg-black/80 transition-colors">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Bottom Left Box */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.15 }} className="bg-[#F8F9FA] rounded-[32px] p-10 lg:p-12 flex flex-col justify-between border border-gray-100 group h-full">
          <div className="mb-12">
            <h3 className="text-3xl lg:text-[40px] font-medium text-[#111] leading-[1.15] tracking-tight mb-5 max-w-[300px]">
              Find items near you
            </h3>
            <p className="text-[17px] text-gray-500 leading-relaxed max-w-[350px]">
              Discover swaps in your location and connect with people around you for faster and easier exchanges.
            </p>
          </div>
          <div className="flex-1 flex items-end justify-center">
            <img 
              src="https://lebiryprumdaarwlhqxr.supabase.co/storage/v1/object/public/jusswapImages/Hero/boxx2.svg" 
              alt="Find items near you avatars" 
              className="w-[95%] max-w-[340px] h-auto object-contain transform group-hover:scale-105 transition-transform duration-500 origin-bottom"
            />
          </div>
        </motion.div>

        {/* Bottom Right Box */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.3 }} className="bg-[#F8F9FA] rounded-[32px] p-10 lg:p-12 flex flex-col justify-between border border-gray-100 group h-full">
          <div className="mb-12">
            <h3 className="text-3xl lg:text-[40px] font-medium text-[#111] leading-[1.15] tracking-tight mb-5 max-w-[360px]">
              Swap smarter with people around you.
            </h3>
            <p className="text-[17px] text-gray-500 leading-relaxed max-w-[360px]">
              Swap smarter with people around you.<br className="hidden sm:block" /> Find what you need and connect for quick, easy swaps.
            </p>
          </div>
          <div className="flex-1 flex items-end justify-center">
            <img 
              src="https://lebiryprumdaarwlhqxr.supabase.co/storage/v1/object/public/jusswapImages/Hero/box3.svg" 
              alt="Swap smartly with people" 
              className="w-[100%] max-w-[380px] h-auto object-contain transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500"
            />
          </div>
        </motion.div>

        {/* Box 4: Full-Width Bottom */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="md:col-span-2 bg-[#F8F9FA] rounded-[32px] p-10 lg:p-16 pb-0 lg:pb-0 flex flex-col items-center text-center border border-gray-100 overflow-hidden gap-10">
          <div className="w-full max-w-[600px] flex flex-col items-center relative z-10">
            <h3 className="text-3xl md:text-[44px] lg:text-[52px] font-medium text-[#111] leading-[1.1] tracking-tight">
              Stand by, A full New<br className="hidden sm:block" /> Experiences
            </h3>
          </div>
          <div className="w-full flex justify-center items-end relative">
            <img 
              src="https://lebiryprumdaarwlhqxr.supabase.co/storage/v1/object/public/jusswapImages/Hero/box4.svg" 
              alt="New Experiences Phones" 
              className="w-[105%] md:w-[95%] lg:w-[90%] max-w-[900px] h-auto object-contain drop-shadow-xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default BentoSection;
