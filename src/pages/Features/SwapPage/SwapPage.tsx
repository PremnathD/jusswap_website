import { motion } from 'framer-motion';
import { ArrowRightLeft, Bot, Truck, ShieldCheck, ArrowRight, Zap, RefreshCcw, Banknote, ShieldAlert, CheckCircle } from 'lucide-react';

const SwapPage = () => {
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
    <div className="w-full bg-[#FAFAFA] text-[#111111] overflow-hidden selection:bg-primary-purple/20">
      
      {/* 1. Dual-Card Glassmorphism Hero */}
      <section className="relative w-full min-h-[90vh] pt-32 pb-24 px-6 flex flex-col justify-center overflow-hidden bg-white">
        {/* Deep ambient background glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary-purple/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="w-full max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
          
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={staggerContainer}
            className="flex flex-col items-start"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-purple/10 border border-primary-purple/20 text-primary-purple font-bold text-sm mb-6 backdrop-blur-md">
              <Zap size={16} /> AI-Powered Exchange
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl lg:text-[76px] font-extrabold text-[#111] leading-[1.05] tracking-tight mb-8">
              Trade What <br /> You Have.<br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-purple to-emerald-500">
                Get What <br className="hidden md:block"/> You Want.
              </span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed max-w-[500px] mb-10">
              Swap items with real people — AI finds your perfect match, and we handle the verified cross-delivery.
            </motion.p>
            
            <motion.button variants={fadeIn} className="flex items-center gap-2 bg-[#111111] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-primary-purple transition-colors shadow-xl hover:-translate-y-1 duration-300">
              Start Swapping <ArrowRight size={20} />
            </motion.button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full h-[500px] flex items-center justify-center"
          >
            {/* Left Glass Card */}
            <div className="absolute left-0 md:left-10 z-10 w-[240px] md:w-[320px] h-[340px] md:h-[420px] bg-white backdrop-blur-xl border border-gray-100 rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.06)] p-6 flex flex-col justify-between transform -rotate-6 translate-y-10">
               <div className="w-full h-[200px] md:h-[260px] bg-gray-100 rounded-[24px] overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop" alt="Item to swap" className="w-full h-full object-cover opacity-90" />
               </div>
               <div>
                 <div className="h-4 w-1/2 bg-gray-200 rounded-full mb-3"></div>
                 <div className="h-4 w-1/3 bg-gray-100 rounded-full"></div>
               </div>
            </div>

            {/* Right Glass Card */}
            <div className="absolute right-0 md:right-10 z-20 w-[240px] md:w-[320px] h-[340px] md:h-[420px] bg-blue-50/80 backdrop-blur-xl border border-blue-100 rounded-[40px] shadow-[0_20px_60px_rgba(107,76,250,0.15)] p-6 flex flex-col justify-between transform rotate-6 -translate-y-10">
               <div className="w-full h-[200px] md:h-[260px] bg-white rounded-[24px] overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=600&auto=format&fit=crop" alt="Item you want" className="w-full h-full object-cover opacity-90" />
               </div>
               <div>
                 <div className="h-4 w-2/3 bg-blue-200 rounded-full mb-3"></div>
                 <div className="h-4 w-1/3 bg-blue-100 rounded-full"></div>
               </div>
            </div>

            {/* The Swap Icon in middle */}
            <div className="absolute z-30 w-24 h-24 bg-white rounded-full border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.1)] flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-linear-to-tr from-primary-purple to-emerald-400 flex items-center justify-center animate-pulse">
                <ArrowRightLeft size={32} className="text-white" />
              </div>
            </div>

          </motion.div>
          
        </div>
      </section>

      {/* 2. Brutalist Problem Ticker (Light Theme) */}
      <section className="w-full py-20 px-6 border-y border-gray-100 bg-[#FAFAFA] relative pb-32">
        <div className="w-full max-w-[1200px] mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-500 mb-16"
          >
            The old cycle is <span className="text-rose-500">exhausting.</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 border-t-4 border-t-rose-500 flex flex-col items-center shadow-sm">
               <ShieldAlert size={48} className="text-rose-500 mb-6" />
               <h3 className="text-2xl font-bold text-[#111] mb-4">Selling takes time.</h3>
               <p className="text-gray-500 text-lg">Months of waiting for a buyer who isn't trying to lowball you.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }} className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 border-t-4 border-t-amber-500 flex flex-col items-center shadow-sm">
               <Banknote size={48} className="text-amber-500 mb-6" />
               <h3 className="text-2xl font-bold text-[#111] mb-4">Buying costs money.</h3>
               <p className="text-gray-500 text-lg">Spending actual cash just to upgrade or swap an item you don't use.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }} className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 border-t-4 border-t-primary-purple flex flex-col items-center shadow-sm">
               <RefreshCcw size={48} className="text-primary-purple mb-6" />
               <h3 className="text-2xl font-bold text-[#111] mb-4">You just want a change.</h3>
               <p className="text-gray-500 text-lg">Sometimes you don't want money—you just want something different.</p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }} viewport={{ once: true }}
            className="absolute left-[50%] transform -translate-x-[50%] -translate-y-[20%] mt-12 w-[90%] max-w-[800px] bg-linear-to-r from-primary-purple to-[#4B2CDE] p-6 md:p-8 rounded-[30px] shadow-[0_20px_50px_rgba(107,76,250,0.3)] z-10"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Jusswap lets you exchange value — without spending a rupee.
            </h3>
          </motion.div>
        </div>
      </section>

      {/* 3. Bento Box Feature Grid (White theme context) */}
      <section className="w-full py-32 px-6 pt-40 bg-white">
        <div className="w-full max-w-[1280px] mx-auto">
          <div className="text-left mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#111] mb-6">Built for fair exchange.</h2>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 auto-rows-[minmax(250px,auto)]"
          >
            {/* Box 1 (Large Image Block) */}
            <motion.div variants={fadeIn} className="bg-gray-50 col-span-1 md:col-span-2 row-span-2 rounded-[40px] border border-gray-100 p-10 md:p-14 flex flex-col md:flex-row items-center gap-10 overflow-hidden relative group hover:border-primary-purple/50 transition-colors shadow-sm">
              <div className="absolute inset-0 bg-linear-to-br from-primary-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="z-10 md:w-1/2">
                <div className="w-16 h-16 bg-white text-primary-purple rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <Bot size={32} />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-[#111] mb-4">AI Matching</h3>
                <p className="text-gray-500 font-medium leading-relaxed text-lg">Our proprietary AI algorithm automatically analyzes your listed item and scans the network to find other users who have exactly what you want, and who want exactly what you have.</p>
              </div>
              
              {/* Abstract Graphic */}
              <div className="z-10 md:w-1/2 w-full h-[300px] bg-white rounded-[30px] border border-gray-100 relative flex items-center justify-center p-6 shadow-inner">
                 <div className="w-full h-1/2 bg-gray-50 rounded-2xl mb-4 border border-gray-100 -translate-x-4 animate-pulse"></div>
                 <div className="absolute w-full h-1/2 top-[40%] bg-primary-purple/10 rounded-2xl border border-primary-purple/20 translate-x-4 backdrop-blur-md"></div>
                 <div className="absolute w-12 h-12 bg-emerald-400 rounded-full shadow-[0_10px_30px_rgba(52,211,153,0.4)] flex items-center justify-center border-4 border-white">
                    <CheckCircle size={24} className="text-white" />
                 </div>
              </div>
            </motion.div>

            {/* Box 2 (Top Right) */}
            <motion.div variants={fadeIn} className="bg-gray-50 col-span-1 border border-gray-100 rounded-[40px] p-8 hover:border-emerald-500/50 transition-colors flex flex-col justify-center shadow-sm">
               <div className="w-14 h-14 bg-white text-emerald-500 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                 <Truck size={28} />
               </div>
               <h3 className="text-2xl font-bold text-[#111] mb-3">Dual Pickup</h3>
               <p className="text-gray-500 text-[15px] font-medium leading-loose">Jusswap agents simultaneously collect from both users. No one waits.</p>
            </motion.div>

            {/* Box 3 (Bottom Right) */}
            <motion.div variants={fadeIn} className="bg-gray-50 col-span-1 border border-gray-100 rounded-[40px] p-8 hover:border-blue-500/50 transition-colors flex flex-col justify-center shadow-sm">
               <div className="w-14 h-14 bg-white text-blue-500 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                 <ShieldCheck size={28} />
               </div>
               <h3 className="text-2xl font-bold text-[#111] mb-3">Both Verified</h3>
               <p className="text-gray-500 text-[15px] font-medium leading-loose">Both items are strictly checked at our centers before cross-delivery begins.</p>
            </motion.div>

            {/* Box 4 (Wide Footer Block) */}
            <motion.div variants={fadeIn} className="bg-gray-50 col-span-1 md:col-span-3 border border-gray-100 rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 hover:border-gray-200 transition-colors shadow-sm">
               <div className="flex gap-6 items-center">
                 <div className="shrink-0 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100">
                   <ArrowRightLeft size={36} className="text-[#111]" />
                 </div>
                 <div>
                   <h3 className="text-2xl font-bold text-[#111] mb-2">Cross Delivery</h3>
                   <p className="text-gray-500 font-medium">Your item goes to them safely. Their item comes to you simultaneously.</p>
                 </div>
               </div>
               <div className="hidden md:flex gap-4">
                 <div className="w-[100px] h-[60px] bg-white rounded-full border border-gray-100 shadow-sm animate-pulse"></div>
                 <div className="w-[100px] h-[60px] bg-primary-purple/10 rounded-full border border-primary-purple/20"></div>
               </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* 4. Winding Flowchart Pipeline (White theme) */}
      <section className="w-full py-32 px-6 bg-[#FAFAFA] border-t border-gray-100">
        <div className="w-full max-w-[1000px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#111] mb-24">The Swapping Pipeline</h2>
          
          <div className="relative">
            {/* Pipeline Background Line */}
            <div className="absolute left-lg md:left-1/2 top-0 bottom-0 w-2xs bg-gray-200 transform md:-translate-x-1/2 rounded-full hidden sm:block"></div>

            {[
              { step: 1, title: 'List Item', desc: 'Tap "Swap" and upload your item.' },
              { step: 2, title: 'AI Matching', desc: 'System suggests items from other users.' },
              { step: 3, title: 'Send Request', desc: 'Propose a swap to the other user.' },
              { step: 4, title: 'Mutual Acceptance', desc: 'They accept your swap proposal.' },
              { step: 5, title: 'Dual Pickup', desc: 'Agents collect both items sequentially.' },
              { step: 6, title: 'Independent Verification', desc: 'Both items verified separately by tech teams.' },
              { step: 7, title: 'Cross Delivered', desc: 'Swap complete. Items delivered. No money.' }
            ].map((item, index) => {
               // Alternate left/right for desktop
               const isEven = index % 2 === 0;
               return (
                 <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`flex items-center w-full mb-12 relative ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                 >
                    {/* Spacer for desktop centering */}
                    <div className="hidden md:block w-1/2"></div>
                    
                    {/* Node */}
                    <div className="absolute left-0 md:left-1/2 w-12 h-12 bg-white rounded-full border-4 border-primary-purple shadow-md transform md:-translate-x-1/2 flex items-center justify-center font-bold text-[#111] z-10">
                       {item.step}
                    </div>

                    {/* Content Card */}
                    <div className={`w-[calc(100%-60px)] md:w-1/2 ml-16 md:ml-0 ${isEven ? 'md:pr-16 md:text-right text-left' : 'md:pl-16 text-left'} flex flex-col justify-center`}>
                       <div className="bg-white border border-gray-100 p-6 rounded-[24px] hover:border-primary-purple/30 transition-colors shadow-sm">
                          <h4 className="text-xl font-bold text-[#111] mb-2">{item.title}</h4>
                          <p className="text-gray-500 font-medium text-sm leading-relaxed">{item.desc}</p>
                       </div>
                    </div>
                 </motion.div>
               );
            })}
          </div>
        </div>
      </section>

      {/* 5. Edge-to-Edge Hover List (Why Swap) */}
      <section className="w-full py-24 border-y border-gray-100 bg-white">
        <div className="w-full max-w-[1280px] mx-auto px-6 mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#111]">Why Swap on Jusswap</h2>
        </div>

        <div className="w-full flex flex-col">
           {/* Item 1 */}
           <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="w-full border-b border-gray-100 group hover:bg-gray-50 transition-colors cursor-default">
              <div className="w-full max-w-[1280px] mx-auto px-6 py-8 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <span className="text-3xl md:text-4xl">💸</span>
                  <h3 className="text-2xl md:text-4xl font-bold text-[#222] group-hover:text-emerald-500 transition-colors tracking-tight">No money changes hands.</h3>
                </div>
                <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center group-hover:bg-emerald-100 group-hover:border-emerald-200 group-hover:rotate-45 transition-all">
                   <ArrowRight size={24} className="text-gray-400 group-hover:text-emerald-500" />
                </div>
              </div>
           </motion.div>

           {/* Item 2 */}
           <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }} viewport={{ once: true }} className="w-full border-b border-gray-100 group hover:bg-gray-50 transition-colors cursor-default">
              <div className="w-full max-w-[1280px] mx-auto px-6 py-8 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <span className="text-3xl md:text-4xl">🤖</span>
                  <h3 className="text-2xl md:text-4xl font-bold text-[#222] group-hover:text-primary-purple transition-colors tracking-tight">AI finds you the right match fast.</h3>
                </div>
                <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center group-hover:bg-purple-100 group-hover:border-purple-200 group-hover:rotate-45 transition-all">
                   <ArrowRight size={24} className="text-gray-400 group-hover:text-primary-purple" />
                </div>
              </div>
           </motion.div>

           {/* Item 3 */}
           <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} viewport={{ once: true }} className="w-full border-b border-gray-100 group hover:bg-gray-50 transition-colors cursor-default">
              <div className="w-full max-w-[1280px] mx-auto px-6 py-8 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <span className="text-3xl md:text-4xl">🛡</span>
                  <h3 className="text-2xl md:text-4xl font-bold text-[#222] group-hover:text-blue-500 transition-colors tracking-tight">Both items verified — no bad surprises.</h3>
                </div>
                <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center group-hover:bg-blue-100 group-hover:border-blue-200 group-hover:rotate-45 transition-all">
                   <ArrowRight size={24} className="text-gray-400 group-hover:text-blue-500" />
                </div>
              </div>
           </motion.div>

           {/* Item 4 */}
           <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} viewport={{ once: true }} className="w-full border-b border-gray-100 group hover:bg-gray-50 transition-colors cursor-default">
              <div className="w-full max-w-[1280px] mx-auto px-6 py-8 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <span className="text-3xl md:text-4xl">🔁</span>
                  <h3 className="text-2xl md:text-4xl font-bold text-[#222] group-hover:text-amber-500 transition-colors tracking-tight">Unique to Jusswap — no other platform.</h3>
                </div>
                <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center group-hover:bg-amber-100 group-hover:border-amber-200 group-hover:rotate-45 transition-all">
                   <ArrowRight size={24} className="text-gray-400 group-hover:text-amber-500" />
                </div>
              </div>
           </motion.div>
        </div>
      </section>

      {/* 6. Closing CTA (Premium Dark block to end page cleanly) */}
      <section className="w-full py-32 px-6 flex flex-col items-center justify-center relative overflow-hidden bg-white">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full max-w-[900px] bg-linear-to-r from-[#111111] to-[#222222] rounded-[60px] p-16 md:p-24 shadow-2xl text-center relative overflow-hidden z-10"
        >
          {/* Subtle gradient slice inside the dark CTA */}
          <div className="absolute top-0 right-0 w-full h-[4px] bg-gradient-to-r from-emerald-400 via-primary-purple to-blue-500"></div>

          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight tracking-tight relative z-10">
            You have something they want. <br className="hidden md:block"/> They have something you need.
          </h2>
          <button className="bg-primary-purple text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-primary-purple transition-colors shadow-xl hover:shadow-2xl duration-300 flex items-center justify-center gap-3 relative z-10 mx-auto group">
            Find Your Swap <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </section>

    </div>
  );
};

export default SwapPage;
