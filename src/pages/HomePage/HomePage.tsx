import Hero from './Hero/Hero';
import StatsBanner from './StatsBanner/StatsBanner';
import Features from './Features/Features';
import BentoSection from './BentoSection/BentoSection';
import NetworkSection from './NetworkSection/NetworkSection';
import BentoSection2 from './BentoSection2/BentoSection2';
import GrabItSection from './GrabItSection/GrabItSection';

const HomePage = () => {
  return (
    <main className="w-full flex-1">
      <Hero />
      <StatsBanner />
      <Features />
      <BentoSection />
      <NetworkSection />
      <BentoSection2 />
      <GrabItSection />
    </main>
  );
};

export default HomePage;
