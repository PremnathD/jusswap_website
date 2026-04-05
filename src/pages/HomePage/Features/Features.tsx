import { motion } from 'framer-motion';

const featuresData = [
  {
    id: 1,
    image: "https://lebiryprumdaarwlhqxr.supabase.co/storage/v1/object/public/jusswapImages/Hero/main1.svg",
    title: "Join Jusswap",
    description: "Create your account in seconds and step into a smarter way of exchanging."
  },
  {
    id: 2,
    image: "https://lebiryprumdaarwlhqxr.supabase.co/storage/v1/object/public/jusswapImages/Hero/main2.svg",
    title: "Pick What You Love",
    description: "Explore items from people around you and find something that truly fits your needs."
  },
  {
    id: 3,
    image: "https://lebiryprumdaarwlhqxr.supabase.co/storage/v1/object/public/jusswapImages/Hero/main3.svg",
    title: "Swap And Connect",
    description: "Chat with users, make a deal, and exchange items no money, just value."
  }
];

const Features = () => {
  return (
    <section className="w-full bg-[#fcfcfd] py-24 px-6 border-t border-gray-100">
      <div className="w-full max-w-[1280px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block text-xs font-bold tracking-[0.15em] text-gray-400 uppercase mb-4">
            Main Features
          </span>
          <h2 className="text-[36px] md:text-[48px] font-bold text-dark-green leading-[1.1] tracking-tight max-w-[800px] mx-auto">
            Exchange anything, without<br className="hidden sm:block" /> spending anything
          </h2>
        </div>

        {/* Features Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
        >
          {featuresData.map((feature) => (
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              key={feature.id} 
              className="bg-white rounded-[24px] md:rounded-[32px] p-8 md:p-10 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50/80 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="h-[200px] w-full mb-8 flex justify-center items-center">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-auto h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-dark-green mb-4 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-[15px] sm:text-base text-text-muted leading-[1.6] max-w-[280px]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};

export default Features;
