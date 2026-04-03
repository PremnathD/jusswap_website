import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import StatsBanner from './components/StatsBanner/StatsBanner';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA]">
      <Header />
      <main className="w-full flex-1">
        <Hero />
        <StatsBanner />
      </main>
    </div>
  );
}



export default App;
