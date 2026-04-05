import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import FaqPage from './pages/FaqPage/FaqPage';
import RealTimeChatPage from './pages/Features/RealTimeChatPage/RealTimeChatPage';
import SellOptionPage from './pages/Features/SellOptionPage/SellOptionPage';
import DonatePage from './pages/Features/DonatePage/DonatePage';
import SwapPage from './pages/Features/SwapPage/SwapPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/features/real-time-chat" element={<RealTimeChatPage />} />
        <Route path="/features/sell-option" element={<SellOptionPage />} />
        <Route path="/features/donate" element={<DonatePage />} />
        <Route path="/features/swap" element={<SwapPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
