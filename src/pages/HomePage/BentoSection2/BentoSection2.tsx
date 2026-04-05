import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { motion } from 'framer-motion';

const BentoSection2 = () => {
  return (
    <section className="w-full bg-white py-12 md:py-20 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
      >
        
        {/* Box 1: Real-time messaging (Spans 2 columns) */}
        <div className="md:col-span-2 rounded-[32px] overflow-hidden relative min-h-[440px] flex items-center bg-[#C9E4FF]">
          <img 
            src="https://lebiryprumdaarwlhqxr.supabase.co/storage/v1/object/public/jusswapImages/Hero/bentoo1.jpg" 
            alt="Real-time messaging feature" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Overlay Text */}
          <div className="relative z-10 w-full md:w-[55%] p-10 lg:p-14 flex flex-col items-start justify-center h-full text-left">
            <h2 className="text-4xl md:text-[44px] lg:text-[52px] font-bold text-[#111111] leading-[1.1] mb-6">
              Real-time<br />messaging.
            </h2>
            <p className="text-[14px] md:text-[15px] text-[#8691A6] font-medium leading-relaxed mb-10 max-w-[340px]">
              Chat instantly with users in real time.<br className="hidden md:block" />
              Discuss, negotiate, and finalize your swaps<br className="hidden md:block" />
              without delay.
            </p>
            {/* Standard Store Buttons */}
            <div className="flex flex-row flex-wrap gap-4">
               <button className="bg-black text-white rounded-xl px-4 py-2.5 flex items-center justify-center gap-2.5 hover:bg-black/80 transition-colors shadow-sm">
                 <FaApple className="text-[26px] shrink-0 mb-1" />
                 <div className="flex flex-col items-start leading-none text-left">
                   <span className="text-[9px] text-gray-300 font-medium mb-0.5">Download on the</span>
                   <span className="text-sm font-semibold tracking-wide">App Store</span>
                 </div>
               </button>
               
               <button className="bg-white border border-gray-200 text-black rounded-xl px-4 py-2.5 flex items-center justify-center gap-2.5 hover:bg-gray-50 transition-colors shadow-sm">
                 <FaGooglePlay className="text-[20px] text-gray-800 shrink-0" />
                 <div className="flex flex-col items-start leading-none text-left">
                   <span className="text-[9px] text-gray-500 font-medium mb-0.5 uppercase tracking-wide">Get it on</span>
                   <span className="text-sm font-semibold tracking-wide">Google Play</span>
                 </div>
               </button>
            </div>
          </div>
        </div>

        {/* Box 2: Real-Time Chat */}
        <div className="md:col-span-1 rounded-[32px] overflow-hidden relative min-h-[380px] bg-[#B5EFCD]">
          <img 
            src="https://lebiryprumdaarwlhqxr.supabase.co/storage/v1/object/public/jusswapImages/Hero/bento2.jpg" 
            alt="Real-Time Chat feature" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 flex flex-col justify-end h-full p-8 lg:p-10 text-center items-center pb-10">
            <h3 className="text-xl lg:text-[24px] font-bold text-[#111] mb-3">Real-Time Chat</h3>
            <p className="text-[13px] lg:text-[14px] font-medium text-[#8691A6] leading-[1.6] max-w-[280px]">
              Message instantly with live updates for faster and smoother<br className="hidden lg:block"/> conversations.
            </p>
          </div>
        </div>

        {/* Box 3: Sell Option */}
        <div className="md:col-span-1 rounded-[32px] overflow-hidden relative min-h-[380px] bg-[#FFD9DF]">
          <img 
            src="https://lebiryprumdaarwlhqxr.supabase.co/storage/v1/object/public/jusswapImages/Hero/bento3.jpg" 
            alt="Sell Option feature" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 flex flex-col justify-end h-full p-8 lg:p-10 text-center mt-5 items-center pb-5">
            <h3 className="text-xl lg:text-[24px] font-bold text-[#111] mb-3">Sell Option</h3>
            <p className="text-[13px] lg:text-[14px] font-medium text-[#8691A6] leading-[1.6] max-w-[280px]">
              List your items and find people interested in exchanging or<br className="hidden lg:block"/> buying them.
            </p>
          </div>
        </div>

        {/* Box 4: Security */}
        <div className="md:col-span-1 rounded-[32px] overflow-hidden relative min-h-[380px] bg-[#FFEAC2]">
          <img 
            src="https://lebiryprumdaarwlhqxr.supabase.co/storage/v1/object/public/jusswapImages/Hero/bento4.jpg" 
            alt="Security feature" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 flex mt-5 flex-col justify-end h-full p-8 lg:p-10 text-center items-center pb-10">
            <h3 className="text-xl lg:text-[24px] font-bold text-[#111] mb-3">Security</h3>
            <p className="text-[13px] lg:text-[14px] font-medium text-[#8691A6] leading-[1.6] max-w-[280px]">
              Stay protected with safe chats, verified users, and secure<br className="hidden lg:block"/> interactions.
            </p>
          </div>
        </div>

        {/* Box 5: Call & Connect */}
        <div className="md:col-span-1 rounded-[32px] overflow-hidden relative min-h-[380px] bg-[#D9DCFA]">
          <img 
            src="https://lebiryprumdaarwlhqxr.supabase.co/storage/v1/object/public/jusswapImages/Hero/bento5.jpg" 
            alt="Call & Connect feature" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 flex flex-col justify-end h-full p-8 lg:p-10 text-center items-center pb-10 mt-5">
            <h3 className="text-xl lg:text-[24px] font-bold text-[#111] mb-3">Call & Connect</h3>
            <p className="text-[13px] lg:text-[14px] font-medium text-[#8691A6] leading-[1.6] max-w-[280px]">
              Quickly connect via call for better communication and faster<br className="hidden lg:block"/> decisions.
            </p>
          </div>
        </div>

      </motion.div>

      {/* Row 2: 1-col and 2-col Layout */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-6 lg:mt-8"
      >
        
        {/* Box 6: View Product Details */}
        <div className="md:col-span-1 rounded-[32px] overflow-hidden relative min-h-[380px] bg-[#D2EFDE]">
          <img 
            src="https://lebiryprumdaarwlhqxr.supabase.co/storage/v1/object/public/jusswapImages/Hero/bento6.jpg" 
            alt="View Product Details feature" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 flex flex-col justify-end h-full p-8 lg:p-10 text-center items-center pb-10">
            <h3 className="text-xl lg:text-[24px] font-bold text-[#111] mb-3">View Product Details</h3>
            <p className="text-[11px] lg:text-[12px] font-medium text-[#8691A6] leading-[1.6] max-w-[280px]">
              Chat instantly with users in real time.<br className="hidden lg:block"/>
              Discuss, negotiate, and finalize your swaps without delay.
            </p>
          </div>
        </div>

        {/* Box 7: Keep Your Friends Close */}
        <div className="md:col-span-2 rounded-[32px] overflow-hidden relative min-h-[380px] bg-[#FDF6ED]">
          <img 
            src="https://lebiryprumdaarwlhqxr.supabase.co/storage/v1/object/public/jusswapImages/Hero/bento7.jpg" 
            alt="Keep Your Friends Close feature" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 flex flex-col justify-end h-full p-8 lg:p-10 text-center items-center pb-10 mt-10">
            <h3 className="text-xl lg:text-[24px] font-bold text-[#111] mb-3">Keep Your Friends Close</h3>
            <p className="text-[13px] lg:text-[14px] font-medium text-[#8691A6] leading-[1.6] max-w-[280px]">
              See When all your friends are online and free to chat
            </p>
          </div>
        </div>

      </motion.div>

      {/* Row 3: 50/50 Split Layout */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-6 lg:mt-8"
      >
        
        {/* Box 8: Be Aware */}
        <div className="md:col-span-1 rounded-[32px] overflow-hidden relative min-h-[440px] bg-[#EEF0F2]">
          <img 
            src="https://lebiryprumdaarwlhqxr.supabase.co/storage/v1/object/public/jusswapImages/Hero/bento8.jpg" 
            alt="Be Aware feature" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 flex flex-col justify-end h-full p-8 lg:p-10 text-center items-center pb-10 ml-[250px]">
            <h3 className="text-xl lg:text-[24px] font-bold text-[#111] mb-3">Be Aware</h3>
            <p className="text-[12px] lg:text-[13px] font-medium text-[#8691A6] leading-[1.6] max-w-[320px]">
              Unused items don't have to become waste.<br className="hidden lg:block"/> Give them a second life through smart swapping.
            </p>
          </div>
        </div>

        {/* Box 9: Wishlist */}
        <div className="md:col-span-1 rounded-[32px] overflow-hidden relative min-h-[440px] bg-[#FCDAE1]">
          <img 
            src="https://lebiryprumdaarwlhqxr.supabase.co/storage/v1/object/public/jusswapImages/Hero/brnto9.jpg" 
            alt="Wishlist feature" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 flex flex-col justify-end h-full p-8 lg:p-10 text-center items-center pb-10">
            <h3 className="text-xl lg:text-[24px] font-bold text-[#111] mb-3">Wishlist</h3>
            <p className="text-[12px] lg:text-[13px] font-medium text-[#8691A6] leading-[1.6] max-w-[320px]">
              Save items you love for later.<br className="hidden lg:block"/> Come back anytime and pick up where you left off.
            </p>
          </div>
        </div>

      </motion.div>

      {/* Row 4: Full Width Join Jusswap */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-[1280px] mx-auto mt-6 lg:mt-8"
      >
        <div className="w-full rounded-[32px] overflow-hidden relative min-h-[360px] md:min-h-[400px] flex items-center justify-center bg-[#FFFFFF]">
          <img 
            src="https://lebiryprumdaarwlhqxr.supabase.co/storage/v1/object/public/jusswapImages/Hero/joinJusswap.jpg" 
            alt="Join Jusswap Banner" 
            className="absolute inset-0 w-full h-full object-contain object-center"
          />
          <div className="relative z-10 flex flex-col items-center justify-center text-center p-8">
            <h2 className="text-3xl md:text-[40px] font-bold text-[#111] mb-2 tracking-tight">Join Jusswap</h2>
            <p className="text-[14px] md:text-[15px] font-medium text-[#8691A6] mb-8 max-w-[400px]">
              Get Jusswap IOS and Android and updated in instagram
            </p>
            <div className="flex flex-row flex-wrap justify-center gap-4">
               <button className="bg-black text-white rounded-xl px-4 py-2.5 flex items-center justify-center gap-2.5 hover:bg-black/80 transition-colors shadow-sm">
                 <FaApple className="text-[26px] shrink-0 mb-1" />
                 <div className="flex flex-col items-start leading-none text-left">
                   <span className="text-[9px] text-gray-300 font-medium mb-0.5">Download on the</span>
                   <span className="text-sm font-semibold tracking-wide">App Store</span>
                 </div>
               </button>
               
               <button className="bg-white border border-gray-200 text-black rounded-xl px-4 py-2.5 flex items-center justify-center gap-2.5 hover:bg-gray-50 transition-colors shadow-sm">
                 <FaGooglePlay className="text-[20px] text-gray-800 shrink-0" />
                 <div className="flex flex-col items-start leading-none text-left">
                   <span className="text-[9px] text-gray-500 font-medium mb-0.5 uppercase tracking-wide">Get it on</span>
                   <span className="text-sm font-semibold tracking-wide">Google Play</span>
                 </div>
               </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BentoSection2;
