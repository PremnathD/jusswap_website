import { ChevronDown, Download, LogIn } from 'lucide-react';

const Header = () => {
  return (
    <header className="h-[80px] flex items-center bg-bg-main border-b border-border-light sticky top-0 z-50">
      <div className="w-full max-w-[1280px] mx-auto px-lg flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center cursor-pointer">
          <img 
            src="https://lebiryprumdaarwlhqxr.supabase.co/storage/v1/object/public/jusswapImages/logo/jusswapLogoBlack.svg" 
            alt="Jusswap Logo" 
            className="h-[48px] w-auto object-contain"
          />
        </div>

        {/* Right Section: Navigation + Actions */}
        <div className="flex items-center gap-2xl">
          {/* Navigation Section */}
          <nav className="hidden md:block">
            <ul className="flex gap-xl">
              <li>
                <a href="#features" className="group text-sm font-medium text-text-dark hover:text-text-muted flex items-center gap-1.5 py-xs transition-colors">
                  Features 
                  <ChevronDown size={14} className="opacity-80 transition-transform duration-200 group-hover:translate-y-[1px]" />
                </a>
              </li>
              <li>
                <a href="#resources" className="group text-sm font-medium text-text-dark hover:text-text-muted flex items-center gap-1.5 py-xs transition-colors">
                  Resources 
                  <ChevronDown size={14} className="opacity-80 transition-transform duration-200 group-hover:translate-y-[1px]" />
                </a>
              </li>
            </ul>
          </nav>

          {/* Actions Section */}
          <div className="flex items-center gap-md">
            <button className="flex items-center gap-xs px-5 py-2.5 rounded-md font-semibold text-sm transition-all duration-200 bg-primary-purple text-white hover:bg-primary-purple-hover hover:-translate-y-[1px] hover:shadow-[0_4px_12px_rgba(183,150,255,0.2)]">
              <span className="hidden sm:inline">Download App</span>
              <Download size={16} />
            </button>
            <button className="flex items-center gap-xs px-5 py-2.5 rounded-md font-semibold text-sm transition-all duration-200 bg-dark-green text-white hover:opacity-90 hover:-translate-y-[1px] hover:shadow-[0_4px_12px_rgba(19,24,17,0.1)]">
              Login <LogIn size={16} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
