import { motion } from 'framer-motion';
import { Camera, Truck, ShieldCheck, Wallet, Clock, Users, DoorOpen, ArrowRight, Sparkles, CheckCircle, PackageCheck, AlertTriangle } from 'lucide-react';

const SellOptionPage = () => {
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
    <div className="w-full bg-white overflow-hidden selection:bg-emerald-500/20">
      
      {/* 1. Center-Weighted Hero */}
      <section className="relative w-full pt-28 pb-32 md:pt-40 px-6 overflow-hidden bg-linear-to-b from-white to-gray-50 flex flex-col items-center text-center">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={staggerContainer}
          className="w-full max-w-[900px] z-10 flex flex-col items-center"
        >
          <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-semibold text-sm mb-8 shadow-sm">
            <Sparkles size={16} /> Features / Seller Experience
          </motion.div>
          
          <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl lg:text-[80px] font-extrabold text-[#111111] leading-[1.05] tracking-tight mb-8">
            List It. <br className="md:hidden"/> We Handle <br className="hidden md:block"/> the Rest.
          </motion.h1>
          
          <motion.p variants={fadeIn} className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed max-w-[600px] mb-12">
            Sell your items without meetups, haggling, or payment risk.
          </motion.p>
          
          <motion.button variants={fadeIn} className="flex items-center gap-2 bg-[#111111] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-emerald-600 transition-colors shadow-2xl hover:-translate-y-1 duration-300">
            Sell Now <ArrowRight size={20} />
          </motion.button>
        </motion.div>

        {/* Massive Ultra-Wide Floating Dashboard/Image */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full max-w-[1200px] mt-20 relative px-4"
        >
          <div className="w-full h-[300px] md:h-[500px] bg-white rounded-t-[40px] shadow-[0_-20px_60px_rgba(0,0,0,0.05)] border-t border-l border-r border-gray-100 overflow-hidden relative">
             <img src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1600&auto=format&fit=crop" alt="Photography of selling items" className="w-full h-full object-cover opacity-90" />
             <div className="absolute inset-0 bg-linear-to-b from-transparent to-white/10"></div>
          </div>
        </motion.div>
      </section>

      {/* 2. The Problem (Alert Cards) */}
      <section className="w-full py-24 px-6 bg-white shrink-0">
        <div className="w-full max-w-[1280px] mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#111111] mb-16">The Old Way is Broken</h2>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <motion.div variants={fadeIn} className="bg-[#FFF4F6] p-8 rounded-3xl md:w-1/3 text-left border border-[#FFE0E6] flex flex-col items-start shadow-sm w-full">
              <div className="bg-[#FF3366] text-white p-3 rounded-full mb-6 relative">
                 <Clock size={24} />
                 <AlertTriangle size={14} className="absolute -top-1 -right-1 text-[#FF3366] fill-white" />
              </div>
              <h4 className="text-xl font-bold text-[#111] mb-2">No-shows waste time</h4>
              <p className="text-rose-900/70 font-medium">Waiting for buyers who never turn up is infuriating.</p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-[#FFF8E6] p-8 rounded-3xl md:w-1/3 text-left border border-[#FFE8A3] flex flex-col items-start shadow-sm w-full md:-translate-y-4">
              <div className="bg-[#FFB800] text-white p-3 rounded-full mb-6 relative">
                 <Wallet size={24} />
                 <AlertTriangle size={14} className="absolute -top-1 -right-1 text-[#FFB800] fill-white" />
              </div>
              <h4 className="text-xl font-bold text-[#111] mb-2">Cash deals are risky</h4>
              <p className="text-yellow-900/70 font-medium">Dealing with cash, fake notes, and haggling at the door.</p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-[#F0F2FF] p-8 rounded-3xl md:w-1/3 text-left border border-[#DCE2FF] flex flex-col items-start shadow-sm w-full">
              <div className="bg-[#2E68FF] text-white p-3 rounded-full mb-6 relative">
                 <DoorOpen size={24} />
                 <AlertTriangle size={14} className="absolute -top-1 -right-1 text-[#2E68FF] fill-white" />
              </div>
              <h4 className="text-xl font-bold text-[#111] mb-2">Strangers at your door</h4>
              <p className="text-blue-900/70 font-medium">Inviting people you don't know into your personal space.</p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 inline-block bg-[#111] text-white px-8 py-4 rounded-full font-bold text-lg"
          >
            Jusswap takes all of that away.
          </motion.div>
        </div>
      </section>

      {/* 3. What You Get (Alternating Zig-Zag) */}
      <section className="w-full py-32 px-6 bg-[#FAFAFA]">
        <div className="w-full max-w-[1100px] mx-auto flex flex-col gap-24 md:gap-32">
          <div className="text-center mb-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#111]">What You Get</h2>
          </div>

          {/* Row 1 */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full md:w-1/2 flex justify-center">
              <div className="w-full h-[350px] bg-emerald-100 rounded-[40px] flex items-center justify-center shadow-lg relative overflow-hidden text-emerald-500">
                <Camera size={100} strokeWidth={1} />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full md:w-1/2 flex flex-col items-start text-left">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                 <Sparkles size={28} />
              </div>
              <h3 className="text-3xl font-bold text-[#111] mb-6">Smart Listing</h3>
              <p className="text-lg text-gray-500 leading-relaxed font-medium">Our AI suggests the perfect title, category, and competitive pricing based on your item. Just upload photos and let us do the heavy lifting.</p>
            </motion.div>
          </div>

          {/* Row 2 (Reversed) */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full md:w-1/2 flex justify-center">
              <div className="w-full h-[350px] bg-blue-100 rounded-[40px] flex items-center justify-center shadow-lg relative overflow-hidden text-blue-500">
                <Truck size={100} strokeWidth={1} />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full md:w-1/2 flex flex-col items-start text-left">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                 <DoorOpen size={28} />
              </div>
              <h3 className="text-3xl font-bold text-[#111] mb-6">Managed Pickup</h3>
              <p className="text-lg text-gray-500 leading-relaxed font-medium">A certified Jusswap agent collects the item directly from your door at a time that suits you. No driving, no packing, no hassle.</p>
            </motion.div>
          </div>

          {/* Row 3 */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full md:w-1/2 flex justify-center">
              <div className="w-full h-[350px] bg-purple-100 rounded-[40px] flex items-center justify-center shadow-lg relative overflow-hidden text-primary-purple">
                <PackageCheck size={100} strokeWidth={1} />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full md:w-1/2 flex flex-col items-start text-left">
              <div className="w-14 h-14 bg-purple-100 text-primary-purple rounded-2xl flex items-center justify-center mb-6">
                 <ShieldCheck size={28} />
              </div>
              <h3 className="text-3xl font-bold text-[#111] mb-6">Verified Delivery</h3>
              <p className="text-lg text-gray-500 leading-relaxed font-medium">Every item is checked against your listing before it reaches the buyer. We take accountability for its condition so you don't face unfair disputes.</p>
            </motion.div>
          </div>

          {/* Row 4 (Reversed) */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full md:w-1/2 flex justify-center">
              <div className="w-full h-[350px] bg-emerald-100 rounded-[40px] flex items-center justify-center shadow-lg relative overflow-hidden text-emerald-600">
                <Wallet size={100} strokeWidth={1} />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full md:w-1/2 flex flex-col items-start text-left">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                 <CheckCircle size={28} />
              </div>
              <h3 className="text-3xl font-bold text-[#111] mb-6">Secure Payment</h3>
              <p className="text-lg text-gray-500 leading-relaxed font-medium">The buyer securely pays upfront. Funds are held safely in escrow and automatically released directly to your bank account after delivery is complete.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. How It Works (Horizontal Step Chain) */}
      <section className="w-full py-32 px-6 bg-white border-t border-gray-100">
        <div className="w-full max-w-[1280px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#111] mb-20 tracking-tight">How It Works</h2>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col lg:flex-row items-center lg:items-start justify-between relative"
          >
            {/* The line connecting them (Desktop only) */}
            <div className="hidden lg:block absolute top-[40px] left-[5%] right-[5%] h-1 bg-linear-to-r from-emerald-100 via-emerald-300 to-primary-purple z-0"></div>

            {[
              { step: 1, title: 'Upload', desc: 'Tap "Sell" and attach photos' },
              { step: 2, title: 'AI Magic', desc: 'Auto-fills title, price & category' },
              { step: 3, title: 'Go Live', desc: 'Listing activates instantly' },
              { step: 4, title: 'Pickup', desc: 'Buyer confirms, agent arrives' },
              { step: 5, title: 'Delivery', desc: 'Item verified and dropped off' },
              { step: 6, title: 'Paid', desc: 'Funds land in your account' }
            ].map((item, index) => (
              <motion.div key={index} variants={fadeIn} className="flex flex-col items-center relative z-10 w-full lg:w-[15%] mb-12 lg:mb-0">
                <div className="w-20 h-20 rounded-full bg-white border-4 border-emerald-500 shadow-xl flex items-center justify-center text-2xl font-extrabold text-[#111] mb-6 relative">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold text-[#111] mb-2">{item.title}</h4>
                <p className="text-gray-500 font-medium text-sm leading-relaxed max-w-[150px]">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Your Protection (Glassmorphism Grid) */}
      <section className="w-full py-24 px-6 relative bg-[#111111] overflow-hidden">
        {/* Background Image Setup */}
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1550565118-3a14e8d0386f?q=80&w=1600&auto=format&fit=crop" alt="Abstract Background" className="w-full h-full object-cover opacity-20" />
        </div>
        
        <div className="w-full max-w-[1280px] mx-auto relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-16 tracking-tight">Your Protection</h2>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto text-left"
          >
             <motion.div variants={fadeIn} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[32px] flex items-start gap-5">
               <ShieldCheck size={36} className="text-emerald-400 shrink-0 mt-1" />
               <div>
                  <h4 className="text-xl font-bold text-white mb-2">Escrow Protected</h4>
                  <p className="text-gray-300">Payment is secured entirely before the pickup process even begins.</p>
               </div>
             </motion.div>

             <motion.div variants={fadeIn} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[32px] flex items-start gap-5">
               <Users size={36} className="text-blue-400 shrink-0 mt-1" />
               <div>
                  <h4 className="text-xl font-bold text-white mb-2">No Meetups Required</h4>
                  <p className="text-gray-300">You literally never have to meet or confront the buyer in person.</p>
               </div>
             </motion.div>

             <motion.div variants={fadeIn} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[32px] flex items-start gap-5">
               <Sparkles size={36} className="text-yellow-400 shrink-0 mt-1" />
               <div>
                  <h4 className="text-xl font-bold text-white mb-2">Build Your Trust Score</h4>
                  <p className="text-gray-300">Every successfully completed sale rapidly builds your reputation metrics algorithmically.</p>
               </div>
             </motion.div>

             <motion.div variants={fadeIn} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[32px] flex items-start gap-5">
               <AlertTriangle size={36} className="text-primary-purple shrink-0 mt-1" />
               <div>
                  <h4 className="text-xl font-bold text-white mb-2">Dispute Management</h4>
                  <p className="text-gray-300">If there genuinely is a dispute, Jusswap admin teams handle the resolution completely.</p>
               </div>
             </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6. Closing CTA */}
      <section className="w-full py-32 px-6 bg-white text-center flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full max-w-[900px] bg-[#111111] rounded-[60px] p-16 md:p-24 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle noise/texture overlay */}
          <div className="absolute inset-0 bg-[url('https://lebiryprumdaarwlhqxr.supabase.co/storage/v1/object/public/jusswapImages/Features/noise.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-emerald-400 via-blue-500 to-primary-purple"></div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight tracking-tight relative z-10">
            Your item has value. <br/> Let's get it sold.
          </h2>
          <button className="bg-emerald-500 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-emerald-400 transition-colors shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:shadow-[0_0_60px_rgba(16,185,129,0.6)] duration-300 flex items-center justify-center gap-3 relative z-10 mx-auto">
            List Your Item <ArrowRight size={24} />
          </button>
        </motion.div>
      </section>

    </div>
  );
};

export default SellOptionPage;
