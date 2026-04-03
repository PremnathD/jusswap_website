const StatsBanner = () => {
  return (
    <section className="w-full relative px-6 py-12 md:py-20 flex justify-center z-20">
      <div className="relative w-full max-w-[1100px]">
        
        {/* Decorative Left Semi-Circles */}
        <div className="absolute top-1/2 -left-6 sm:-left-12 md:-left-16 -translate-y-1/2 flex items-center -z-10">
          <div className="w-8 h-24 sm:w-12 sm:h-36 md:w-16 md:h-48 rounded-r-full bg-[#8A51FF]"></div>
          <div className="w-8 h-24 sm:w-12 sm:h-36 md:w-16 md:h-48 rounded-r-full bg-[#A88BFF] -ml-4 sm:-ml-6 md:-ml-8"></div>
        </div>
        
        {/* Decorative Right Semi-Circles */}
        <div className="absolute top-1/2 -right-6 sm:-right-12 md:-right-16 -translate-y-1/2 flex items-center flex-row-reverse -z-10">
          <div className="w-8 h-24 sm:w-12 sm:h-36 md:w-16 md:h-48 rounded-l-full bg-[#8A51FF]"></div>
          <div className="w-8 h-24 sm:w-12 sm:h-36 md:w-16 md:h-48 rounded-l-full bg-[#A88BFF] -mr-4 sm:-mr-6 md:-mr-8"></div>
        </div>

        {/* Main White Box */}
        <div className="bg-white rounded-[24px] md:rounded-[32px] w-full px-8 py-10 md:px-14 md:py-12 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-4 shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-gray-100">
          
          {/* Left Text */}
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-medium text-text-muted italic leading-relaxed max-w-[240px] mx-auto md:mx-0">
              "We've people company maintain"
            </h3>
          </div>

          {/* Center Minimal Arrow Indicator */}
          <div className="hidden md:flex w-full md:w-1/3 justify-center items-center">
            <svg width="80" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-300">
              <path d="M0 12 L75 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 4" fill="none" />
              <path d="M65 4 L76 12 L65 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>

          {/* Right Stats */}
          <div className="w-full md:w-1/3 flex flex-col sm:flex-row items-center justify-center md:justify-end gap-10 sm:gap-16 text-center sm:text-left">
            <div className="flex flex-col gap-0.5">
              <span className="text-3xl lg:text-[40px] font-bold text-dark-green tracking-tight">$9.1b+</span>
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mt-1">Coverage</span>
            </div>
            
            <div className="flex flex-col gap-0.5">
              <span className="text-3xl lg:text-[40px] font-bold text-dark-green tracking-tight">1.2m</span>
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mt-1">Low interest rate</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
