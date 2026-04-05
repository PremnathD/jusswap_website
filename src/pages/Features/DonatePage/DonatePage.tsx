import { motion } from 'framer-motion';
import { Heart, Gift, Truck, Badge, Leaf, RefreshCcw, Users, ArrowRight, HeartHandshake, ShieldCheck } from 'lucide-react';

const DonatePage = () => {
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
    <div className="w-full bg-[#FCFBF8] overflow-hidden selection:bg-orange-500/20">
      
      {/* 1. Split 50/50 Hero */}
      <section className="relative w-full pt-28 pb-20 lg:pt-36 lg:pb-24 px-6 overflow-hidden">
        <div className="w-full max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={staggerContainer}
            className="flex flex-col items-start z-10"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 font-semibold text-sm mb-6 shadow-sm">
              <Heart size={16} className="fill-orange-500 text-orange-500" /> Community Focus
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl lg:text-[76px] font-extrabold text-[#222] leading-[1.05] tracking-tight mb-8">
              Give More. <br />
              <span className="text-orange-500">Keep Nothing <br className="hidden md:block"/> Wasted.</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed max-w-[500px] mb-10">
              Donate what you no longer need — we pick it up and deliver it safely to someone who does.
            </motion.p>
            
            <motion.button variants={fadeIn} className="flex items-center gap-2 bg-orange-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-colors shadow-xl hover:-translate-y-1 hover:shadow-2xl duration-300">
              Donate Now <ArrowRight size={20} />
            </motion.button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full h-[500px] md:h-[650px] rounded-[60px] md:rounded-[80px] overflow-hidden shadow-2xl"
          >
             <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop" alt="Volunteer holding box" className="absolute inset-0 w-full h-full object-cover" />
             <div className="absolute inset-0 bg-linear-to-tr from-orange-900/40 to-transparent"></div>
          </motion.div>
          
        </div>
      </section>

      {/* 2. The Problem (Oversized Minimalist Stack) */}
      <section className="w-full py-24 px-6 relative">
        <div className="w-full max-w-[1000px] mx-auto flex flex-col gap-8 md:gap-12 text-[#222]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border-l-4 border-orange-200 pl-6 md:pl-10">
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight text-gray-400">
              <span className="text-[#222]">Good items</span> sit unused in closets for years.
            </h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }} className="border-l-4 border-orange-300 pl-6 md:pl-10">
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight text-gray-400">
              Arranging meetups for free stuff is <span className="text-[#222]">awkward</span>.
            </h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }} className="border-l-4 border-orange-500 pl-6 md:pl-10">
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight text-gray-400">
              Most donations never happen because of the <span className="text-[#222]">hassle</span>.
            </h2>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }} viewport={{ once: true }} className="mt-10 px-6 py-8 bg-white rounded-3xl shadow-sm border border-orange-100 flex items-center justify-center text-center">
            <h3 className="text-xl md:text-2xl font-bold text-orange-600">
              Jusswap makes giving <span className="underline decoration-wavy decoration-orange-300">as easy as selling.</span>
            </h3>
          </motion.div>
        </div>
      </section>

      {/* 3. What You Get (Asymmetric Rich Grid) */}
      <section className="w-full py-24 px-6 bg-[#FAFAFA] rounded-t-[60px] md:rounded-t-[80px]">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="text-center mb-16 max-w-[600px] mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#222] mb-6">A Better Way to Give</h2>
          </div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[minmax(250px,auto)]"
          >
            {/* Box 1 (Tall Image emphasis) */}
            <motion.div variants={fadeIn} className="bg-white p-8 md:p-12 rounded-[40px] shadow-sm flex flex-col justify-between border border-gray-100">
              <div>
                <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mb-8">
                  <Gift size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[#222] mb-4">Simple Listing</h3>
                <p className="text-gray-500 font-medium leading-relaxed text-lg pb-6">List your item globally as 'free' in under 2 minutes utilizing our heavily optimized description framework.</p>
              </div>
            </motion.div>

            {/* Box 2 */}
            <motion.div variants={fadeIn} className="bg-orange-500 p-8 md:p-12 rounded-[40px] shadow-xl flex flex-col justify-between text-white md:row-span-2">
              <div>
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-8">
                  <Users size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-4">Choose Your Recipient</h3>
                <p className="text-orange-50 font-medium leading-relaxed text-lg mb-8">Once your item goes live, nearby users can send requests. You have the total power to review them and personally pick who receives your gift.</p>
              </div>
              <div className="w-full h-[200px] bg-black/10 rounded-[20px] backdrop-blur-sm overflow-hidden flex items-center justify-center">
                 <HeartHandshake size={80} className="text-white/40" />
              </div>
            </motion.div>

            {/* Box 3 */}
            <motion.div variants={fadeIn} className="bg-[#222] p-8 md:p-12 rounded-[40px] shadow-xl flex flex-col justify-between text-white">
              <div>
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-8">
                  <Truck size={32} className="text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">We Deliver It</h3>
                <p className="text-gray-400 font-medium leading-relaxed text-lg">Our certified agent picks up the item from your house and delivers it. You do zero driving.</p>
              </div>
            </motion.div>

            {/* Box 4 (Wide) */}
            <motion.div variants={fadeIn} className="bg-white p-8 md:p-12 rounded-[40px] shadow-sm md:col-span-2 flex flex-col md:flex-row items-center gap-8 justify-between border border-gray-100">
              <div className="max-w-[500px]">
                <div className="w-16 h-16 bg-purple-50 text-primary-purple rounded-full flex items-center justify-center mb-8">
                  <ShieldCheck size={32} />
                </div>
                <h3 className="text-3xl font-bold text-[#222] mb-4">Earn a Badge</h3>
                <p className="text-gray-500 font-medium leading-relaxed text-lg">Every successful donation earns you a permanent "Generous" trust badge on your public Jusswap profile, accelerating your community reputation.</p>
              </div>
              <div className="shrink-0 w-[150px] h-[150px] bg-amber-100 rounded-full flex items-center justify-center relative shadow-inner">
                 <div className="absolute inset-2 border-2 border-dashed border-amber-400 rounded-full animate-spin-slow"></div>
                 <Badge size={60} className="text-amber-500 fill-amber-500" />
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* 4. How It Works (Vertical Timeline Flow) */}
      <section className="w-full py-32 px-6 bg-white">
        <div className="w-full max-w-[800px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#222] mb-20 md:text-center">The Flow of Giving</h2>
          
          <div className="relative border-l-2 border-orange-100 pl-8 ml-4 md:ml-20 space-y-16">
            
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-white border-[6px] border-orange-500 shadow-sm"></div>
              <h4 className="text-2xl font-bold text-[#222] mb-3">1. Tap "Donate"</h4>
              <p className="text-lg text-gray-500 font-medium">Upload clear photos, write a quick description, and set the condition.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-white border-[6px] border-orange-400 shadow-sm"></div>
              <h4 className="text-2xl font-bold text-[#222] mb-3">2. Nearby users notified</h4>
              <p className="text-lg text-gray-500 font-medium">Our system alerts people in your local network who might want the item.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
               <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-white border-[6px] border-orange-300 shadow-sm"></div>
              <h4 className="text-2xl font-bold text-[#222] mb-3">3. Review & Pick</h4>
              <p className="text-lg text-gray-500 font-medium">Read through requests and cheerfully select your chosen recipient.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
               <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-white border-[6px] border-emerald-400 shadow-sm"></div>
              <h4 className="text-2xl font-bold text-[#222] mb-3">4. Agent handles logistics</h4>
              <p className="text-lg text-gray-500 font-medium">A designated Jusswap agent seamlessly picks up from you and delivers to them.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
               <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-white border-[6px] border-primary-purple shadow-sm"></div>
              <h4 className="text-2xl font-bold text-[#222] mb-3">5. Impact created</h4>
              <p className="text-lg text-gray-500 font-medium">Your generous donation process is legally completed, and your trust badge levels up.</p>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* 5. Why It Matters (4-Column Halo Icons) */}
      <section className="w-full py-24 px-6 bg-[#FAFAFA] border-y border-gray-100">
        <div className="w-full max-w-[1280px] mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#222] mb-16">Why It Matters</h2>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          >
             <motion.div variants={fadeIn} className="flex flex-col items-center text-center">
               <div className="w-24 h-24 rounded-full bg-emerald-50 relative flex items-center justify-center mb-6 shadow-inner ring-20 ring-emerald-50/50">
                  <RefreshCcw size={36} className="text-emerald-500" />
               </div>
               <h4 className="font-bold text-xl text-[#222] mb-2">Reduce waste</h4>
               <p className="text-gray-500 leading-relaxed font-medium">Give items a second life instead of filling up local landfills.</p>
             </motion.div>

             <motion.div variants={fadeIn} className="flex flex-col items-center text-center">
               <div className="w-24 h-24 rounded-full bg-rose-50 relative flex items-center justify-center mb-6 shadow-inner ring-20 ring-rose-50/50">
                  <HeartHandshake size={36} className="text-rose-500" />
               </div>
               <h4 className="font-bold text-xl text-[#222] mb-2">Build real connections</h4>
               <p className="text-gray-500 leading-relaxed font-medium">Help real people in your neighborhood and foster community.</p>
             </motion.div>

             <motion.div variants={fadeIn} className="flex flex-col items-center text-center">
               <div className="w-24 h-24 rounded-full bg-amber-50 relative flex items-center justify-center mb-6 shadow-inner ring-20 ring-amber-50/50">
                  <Badge size={36} className="text-amber-500" />
               </div>
               <h4 className="font-bold text-xl text-[#222] mb-2">Boost your score</h4>
               <p className="text-gray-500 leading-relaxed font-medium">The Generous badge builds your marketplace trustworthiness rapidly.</p>
             </motion.div>

             <motion.div variants={fadeIn} className="flex flex-col items-center text-center">
               <div className="w-24 h-24 rounded-full bg-blue-50 relative flex items-center justify-center mb-6 shadow-inner ring-20 ring-blue-50/50">
                  <Leaf size={36} className="text-blue-500" />
               </div>
               <h4 className="font-bold text-xl text-[#222] mb-2">Circular economy</h4>
               <p className="text-gray-500 leading-relaxed font-medium">Every donation counts toward a significantly healthier planet.</p>
             </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6. Closing CTA (Warm Pastel) */}
      <section className="w-full py-32 px-6 bg-[#FCFBF8] text-center flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full max-w-[800px] bg-orange-100 rounded-[50px] border border-orange-200 p-16 shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-[-50%] left-[-20%] w-[300px] h-[300px] bg-orange-300 rounded-full blur-[100px] opacity-40"></div>
          <div className="absolute bottom-[-50%] right-[-20%] w-[300px] h-[300px] bg-yellow-300 rounded-full blur-[100px] opacity-40"></div>
          
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md mx-auto mb-8 relative z-10">
             <Heart size={36} className="fill-orange-500 text-orange-500" />
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#5c2a16] mb-8 leading-tight tracking-tight relative z-10">
            Someone near you needs what you no longer use.
          </h2>
          <button className="bg-orange-500 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-orange-600 transition-colors shadow-[0_10px_30px_rgba(249,115,22,0.4)] hover:shadow-[0_15px_40px_rgba(249,115,22,0.5)] duration-300 flex items-center justify-center gap-3 relative z-10 mx-auto">
            Donate an Item <ArrowRight size={24} />
          </button>
        </motion.div>
      </section>

    </div>
  );
};

export default DonatePage;
