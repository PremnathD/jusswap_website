import { ChevronDown, Download, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="h-[80px] flex items-center bg-bg-main border-b border-border-light sticky top-0 z-50">
      <div className="w-full max-w-[1280px] mx-auto px-lg flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex items-center cursor-pointer">
          <img 
            src="https://lebiryprumdaarwlhqxr.supabase.co/storage/v1/object/public/jusswapImages/logo/jusswapLogoBlack.svg" 
            alt="Jusswap Logo" 
            className="h-[48px] w-auto object-contain"
          />
        </Link>

        {/* Right Section: Navigation + Actions */}
        <div className="flex items-center gap-2xl">
          {/* Navigation Section */}
          <nav className="hidden md:block">
            <ul className="flex gap-xl">
              <li className="relative group">
                <a href="#features" className="text-sm font-medium text-text-dark hover:text-text-muted flex items-center gap-1.5 py-xs transition-colors cursor-pointer">
                  Features 
                  <ChevronDown size={14} className="opacity-80 transition-transform duration-300 group-hover:-scale-y-100" />
                </a>
                
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 pt-4 w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-[10px] group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
                  <div className="bg-white border text-sm border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-xl py-2 flex flex-col px-2 relative -mt-2">
                    <Link to="/features/real-time-chat" className="w-full text-left px-4 py-2.5 rounded-lg hover:bg-gray-50 hover:text-primary-purple font-medium text-[#555555] transition-colors">Real-Time Chat</Link>
                    <Link to="/features/sell-option" className="w-full text-left px-4 py-2.5 rounded-lg hover:bg-gray-50 hover:text-primary-purple font-medium text-[#555555] transition-colors">Sell Option</Link>
                    <Link to="/features/donate" className="w-full text-left px-4 py-2.5 rounded-lg hover:bg-gray-50 hover:text-primary-purple font-medium text-[#555555] transition-colors">Donate</Link>
                    <Link to="/features/swap" className="w-full text-left px-4 py-2.5 rounded-lg hover:bg-gray-50 hover:text-primary-purple font-medium text-[#555555] transition-colors">Swap</Link>
                  </div>
                </div>
              </li>
              <li className="relative group">
                <a href="#resources" className="text-sm font-medium text-text-dark hover:text-text-muted flex items-center gap-1.5 py-xs transition-colors cursor-pointer">
                  Resources 
                  <ChevronDown size={14} className="opacity-80 transition-transform duration-300 group-hover:-scale-y-100" />
                </a>

                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 pt-4 w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-[10px] group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
                  <div className="bg-white border text-sm border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-xl py-2 flex flex-col px-2 relative -mt-2">
                    <Link to="/faq" className="w-full text-left px-4 py-2.5 rounded-lg hover:bg-gray-50 hover:text-primary-purple font-medium text-[#555555] transition-colors">FAQ</Link>
                    <a href="#" className="w-full text-left px-4 py-2.5 rounded-lg hover:bg-gray-50 hover:text-primary-purple font-medium text-[#555555] transition-colors">Help Centre</a>
                  </div>
                </div>
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
