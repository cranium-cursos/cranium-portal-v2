import { lazy, Suspense } from 'react';
import PromoBanner from './components/PromoBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const EncyclopediaSection = lazy(() => import('./components/EncyclopediaSection'));
const ProblemSection = lazy(() => import('./components/ProblemSection'));
const CoursesSection = lazy(() => import('./components/CoursesSection'));
const SolutionSection = lazy(() => import('./components/SolutionSection'));
const ClassLibrary = lazy(() => import('./components/ClassLibrary'));
const SophiaChatSection = lazy(() => import('./components/SophiaChatSection'));
const PromoBonus = lazy(() => import('./components/PromoBonus'));
const PricingSection = lazy(() => import('./components/PricingSection'));
const FAQSection = lazy(() => import('./components/FAQSection'));

import logoImg from './assets/logo-portal.png';

function App() {
  return (
    <div className="min-h-screen bg-background text-white font-sans selection:bg-primary/30">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-black focus:rounded-lg focus:font-bold">
        Pular para o conteudo principal
      </a>
      <PromoBanner />
      <Navbar />

      <main id="main-content">
        <Hero />

        <Suspense fallback={null}>
          <EncyclopediaSection />

          <ProblemSection />

          <CoursesSection />

          <SolutionSection />

          <ClassLibrary />

          <SophiaChatSection />

          <PromoBonus />
          <PricingSection />
          <FAQSection />
        </Suspense>

      </main>

      <footer className="py-12 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center gap-6">
          <img src={logoImg} alt="Portal Cranium" loading="lazy" decoding="async" width={160} height={40} className="h-10 w-auto opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Portal Cranium. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
