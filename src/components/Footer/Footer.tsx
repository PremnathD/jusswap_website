import { Mail, MessageSquare } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-[#FAFAFA] pt-16 pb-8 px-6 border-t border-gray-100 mt-20">
      <div className="w-full max-w-[1280px] mx-auto">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          
          <div className="flex flex-col">
            <h4 className="font-bold text-[#111111] mb-5 text-[15px]">Features</h4>
            <ul className="flex flex-col gap-3 text-[14px] text-[#555555] font-medium">
              <li><a href="#" className="hover:text-primary-purple transition-colors">Real-Time Chat</a></li>
              <li><a href="#" className="hover:text-primary-purple transition-colors">Sell Option</a></li>
              <li><a href="#" className="hover:text-primary-purple transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-primary-purple transition-colors">Call & Connect</a></li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="font-bold text-[#111111] mb-5 text-[15px]">Company</h4>
            <ul className="flex flex-col gap-3 text-[14px] text-[#555555] font-medium">
              <li><a href="#" className="hover:text-primary-purple transition-colors">About us</a></li>
              <li><a href="#" className="hover:text-primary-purple transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-primary-purple transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-primary-purple transition-colors">Service status</a></li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="font-bold text-[#111111] mb-5 text-[15px]">Download</h4>
            <ul className="flex flex-col gap-3 text-[14px] text-[#555555] font-medium">
              <li><a href="#" className="hover:text-primary-purple transition-colors">Use Jusswap</a></li>
            </ul>
          </div>
          
        </div>

        {/* Middle Section (Support & Socials) */}
        <div className="py-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-6 md:gap-8">
            <a href="mailto:support@jusswap.com" className="flex items-center gap-2 text-[#2E68FF] font-medium text-[15px] hover:opacity-80 transition-opacity">
              <Mail size={18} />
              support@jusswap.com
            </a>
            <div className="hidden md:block w-[1px] h-4 bg-gray-300"></div>
            <a href="#" className="flex items-center gap-2 text-[#2E68FF] font-medium text-[15px] hover:opacity-80 transition-opacity">
              <MessageSquare size={18} />
              Submit Feedback
            </a>
          </div>
          <div className="flex items-center gap-4 text-black">
            <a href="#" className="hover:opacity-70 transition-opacity">
              {/* Displaying X/Twitter style icon via standard Twitter or SVG */}
              <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <div className="bg-[#FFD500] p-1 rounded font-bold text-black flex items-center justify-center">
                 <FaInstagram size={18} />
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Section (Links & Copyright) */}
        <div className="pt-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] md:text-[13px] text-[#555555] font-medium">
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-black transition-colors">Cookie Policy</a>
          </div>
          <div>
            © 2026, Jusswap Inc. All Rights Reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
