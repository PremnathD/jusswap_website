import { motion } from 'framer-motion';
import { MessageCircle, PhoneCall, Image as ImageIcon, CheckCircle, ShieldCheck, Eye, Ban, Archive, ArrowRight, ShieldAlert, Download } from 'lucide-react';

const RealTimeChatPage = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="w-full bg-white overflow-hidden selection:bg-primary-purple/20">
      
      {/* 1. Hero Section */}
      <section className="relative w-full pt-28 pb-20 lg:pt-36 lg:pb-32 px-6 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary-purple/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        <div className="w-full max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeIn}
            className="flex flex-col items-start z-10"
          >
            <span className="text-primary-purple font-semibold tracking-wide uppercase text-sm mb-4">Features / Chat & Calls</span>
            <h1 className="text-5xl md:text-6xl lg:text-[72px] font-extrabold text-[#111111] leading-[1.1] tracking-tight mb-6">
              Talk. Call. Deal. <br className="hidden sm:block"/>
              <span className="text-primary-purple">All in One Place.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed max-w-[500px] mb-10">
              Connect with buyers and sellers instantly — no numbers shared, no apps needed.
            </p>
            <button className="flex items-center gap-2 bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-colors shadow-lg hover:-translate-y-1 duration-300">
              Start Chatting <ArrowRight size={20} />
            </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative lg:ml-auto w-full max-w-[500px] h-[400px] md:h-[600px] rounded-[40px] overflow-hidden shadow-2xl flex items-center justify-center bg-gray-100"
          >
            <img 
              src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop" 
              alt="Person using a smartphone to chat" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark overlay for contrast if needed */}
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
          </motion.div>
        </div>
      </section>

      {/* 2. The Problem */}
      <section className="w-full bg-[#111111] py-24 px-6 text-center text-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary-purple/20 via-[#111111] to-[#111111] opacity-50 pointer-events-none"></div>
        <motion.div  
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          className="w-full max-w-[800px] mx-auto flex flex-col items-center relative z-10"
        >
          <motion.div variants={fadeIn} className="bg-white/10 p-4 rounded-full mb-8">
            <ShieldAlert size={40} className="text-[#FF3366]" />
          </motion.div>
          <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            Sharing your number with a stranger is risky.
          </motion.h2>
          <motion.p variants={fadeIn} className="text-gray-400 text-lg md:text-xl font-medium max-w-[600px] mx-auto leading-relaxed">
            Missing messages means missed deals. Jusswap keeps every conversation 
            <span className="text-white"> safe, fast, and completely inside the app.</span>
          </motion.p>
        </motion.div>
      </section>

      {/* 3. What You Can Do (Grid) */}
      <section className="w-full py-24 px-6 bg-[#FAFAFA]">
        <div className="w-full max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111] mb-4">What You Can Do</h2>
            <p className="text-gray-500 font-medium">Everything you need to close the deal, securely.</p>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {/* Card 1 */}
            <motion.div variants={fadeIn} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 text-primary-purple rounded-xl flex items-center justify-center mb-6">
                <MessageCircle size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#111] mb-3">Instant Message</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed">Real-time chat with any buyer or seller directly from their listing.</p>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={fadeIn} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-[#0058FF] rounded-xl flex items-center justify-center mb-6">
                <PhoneCall size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#111] mb-3">In-App Call</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed">Voice call securely over the internet without ever revealing your personal number.</p>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={fadeIn} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-pink-100 text-[#FF3366] rounded-xl flex items-center justify-center mb-6">
                <ImageIcon size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#111] mb-3">Share Images</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed">Send extra photos or verification videos of the item effortlessly inside chat.</p>
            </motion.div>

            {/* Card 4 */}
            <motion.div variants={fadeIn} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#111] mb-3">Confirm Deal</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed">Lock the deal directly from the chat window and initiate the delivery process.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. How It Works (Timeline / Steps) */}
      <section className="w-full py-24 px-6 bg-white overflow-hidden">
        <div className="w-full max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative lg:ml-0 w-full h-[400px] md:h-[600px] rounded-[40px] overflow-hidden bg-gray-100"
          >
            <img 
              src="https://images.unsplash.com/photo-1577563908411-5079b6fa7636?q=80&w=1000&auto=format&fit=crop" 
              alt="Person messaging seamlessly" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#111] mb-12">How It Works</h2>
            <div className="flex flex-col gap-8 relative border-l-2 border-gray-100 pl-8 ml-4">
              
              <motion.div variants={fadeIn} className="relative">
                <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center text-sm font-bold text-gray-500">1</div>
                <h4 className="text-xl font-bold text-[#111] mb-2">Open listing</h4>
                <p className="text-gray-500 font-medium pb-2">Browse the marketplace, open any item listing, and tap the "Chat" button.</p>
              </motion.div>

              <motion.div variants={fadeIn} className="relative">
                <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-white border-2 border-primary-purple flex items-center justify-center text-sm font-bold text-primary-purple shadow-[0_0_10px_rgba(107,76,250,0.3)]">2</div>
                <h4 className="text-xl font-bold text-[#111] mb-2">Message or Call</h4>
                <p className="text-gray-500 font-medium pb-2">Reach the seller instantly via text or voice call built right into Jusswap.</p>
              </motion.div>

              <motion.div variants={fadeIn} className="relative">
                <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center text-sm font-bold text-gray-500">3</div>
                <h4 className="text-xl font-bold text-[#111] mb-2">Agree on the deal</h4>
                <p className="text-gray-500 font-medium pb-2">Negotiate the price, request more images, and come to a solid agreement.</p>
              </motion.div>

              <motion.div variants={fadeIn} className="relative">
                <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center text-sm font-bold text-gray-500">4</div>
                <h4 className="text-xl font-bold text-[#111] mb-2">Confirm Deal</h4>
                <p className="text-gray-500 font-medium pb-2">Tap "Confirm Deal" to lock the transaction. Our agent takes over from here!</p>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Trust Built In */}
      <section className="w-full py-24 px-6 bg-[#FAFAFA]">
        <div className="w-full max-w-[1000px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111] mb-12">Trust Built In</h2>
          
          <motion.div 
             variants={staggerContainer}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 text-left"
          >
             <motion.div variants={fadeIn} className="flex gap-4 items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
               <ShieldCheck size={28} className="text-primary-purple shrink-0 mt-0.5" />
               <div>
                 <h4 className="font-bold text-lg text-[#111] mb-1">Your number is never shared</h4>
                 <p className="text-gray-500 text-sm leading-relaxed">Enjoy complete privacy. We bridge calls and texts via data so your personal contact stays hidden.</p>
               </div>
             </motion.div>

             <motion.div variants={fadeIn} className="flex gap-4 items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
               <Eye size={28} className="text-blue-500 shrink-0 mt-0.5" />
               <div>
                 <h4 className="font-bold text-lg text-[#111] mb-1">Seller's trust score visible</h4>
                 <p className="text-gray-500 text-sm leading-relaxed">Every chat header displays the user's trust score dynamically to ensure transparency before you deal.</p>
               </div>
             </motion.div>

             <motion.div variants={fadeIn} className="flex gap-4 items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
               <Ban size={28} className="text-rose-500 shrink-0 mt-0.5" />
               <div>
                 <h4 className="font-bold text-lg text-[#111] mb-1">No links, no scams</h4>
                 <p className="text-gray-500 text-sm leading-relaxed">Our system automatically blocks external links, URLs, and risky payment requests to protect you.</p>
               </div>
             </motion.div>

             <motion.div variants={fadeIn} className="flex gap-4 items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
               <Archive size={28} className="text-emerald-500 shrink-0 mt-0.5" />
               <div>
                 <h4 className="font-bold text-lg text-[#111] mb-1">Chat history saved</h4>
                 <p className="text-gray-500 text-sm leading-relaxed">Every message is securely saved in your inbox and always accessible for reference and dispute resolution.</p>
               </div>
             </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6. Closing CTA */}
      <section className="w-full py-32 px-6 bg-[#FFF] text-[#111111] overflow-visible flex justify-center">
        <div className="w-full max-w-[1000px] bg-[#E8E2FF] rounded-[40px] md:rounded-[20px] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between relative shadow-2xl">
          
          {/* Left Text Block */}
          <div className="flex flex-col items-start z-10 w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-10 leading-[1.1] tracking-tight">
              So what are you <br/> waiting for?
            </h2>
            <div className="flex flex-wrap items-center gap-4">
              <button className="bg-[#111111] text-white px-6 py-4 rounded-xl font-bold hover:bg-primary-purple transition-colors shadow-lg flex items-center gap-2">
                Download Now <Download size={18} />
              </button>
              <button className="bg-[#111111] text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-purple transition-colors shadow-lg flex items-center gap-2">
                Login <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Right Graphics Block */}
          <div className="mt-20 md:mt-0 relative w-full md:w-1/2 flex justify-center md:justify-end pr-0 md:pr-10 lg:pr-24 z-10">
            
            {/* Handwritten Text & Arrow */}
            <div className="absolute top-[-70px] right-[20px] md:right-[60px] transform -rotate-12 hidden sm:block">
              <p className="font-[cursive] text-xl font-bold text-[#111111] whitespace-nowrap mb-2">
                Scan and use <br/> Jusswap app
              </p>
              {/* Custom SVG Doodle Arrow */}
              <svg width="40" height="50" viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-8 mt-1 transform rotate-12">
                <path d="M5 5 C 5 30, 20 40, 35 45 M 25 45 L 35 45 L 30 35" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>

            {/* QR Code Anchor Card */}
            <motion.div 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               viewport={{ once: true }}
               className="bg-white p-5 rounded-[24px] shadow-2xl relative md:absolute md:-bottom-[130px] md:right-0 w-[200px] md:w-[240px] transform -translate-y-6 md:translate-y-0"
            >
              <img 
                 src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://jusswap.com" 
                 alt="Jusswap QR" 
                 className="w-full h-auto rounded-xl object-contain border border-gray-100 p-2" 
               />
              <div className="mt-4 flex flex-col items-center justify-center gap-1 pb-1">
                 <img 
                    src="https://lebiryprumdaarwlhqxr.supabase.co/storage/v1/object/public/jusswapImages/logo/jusswapLogoBlack.svg" 
                    alt="Jusswap" 
                    className="h-[28px] object-contain" 
                 />
              </div>
            </motion.div>
          </div>
          
        </div>
      </section>

    </div>
  );
};

export default RealTimeChatPage;
