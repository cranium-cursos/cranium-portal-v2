import { lazy, Suspense } from 'react';
import PromoBanner from './components/PromoBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const EncyclopediaSection = lazy(() => import('./components/EncyclopediaSection'));
const ProblemSection = lazy(() => import('./components/ProblemSection'));
const CourseCarousel = lazy(() => import('./components/CourseCarousel'));
const SolutionSection = lazy(() => import('./components/SolutionSection'));
const ClassLibrary = lazy(() => import('./components/ClassLibrary'));
const SophiaChatSection = lazy(() => import('./components/SophiaChatSection'));
const PromoBonus = lazy(() => import('./components/PromoBonus'));
const PricingSection = lazy(() => import('./components/PricingSection'));
const FAQSection = lazy(() => import('./components/FAQSection'));

import {
  cefaleiaCourses,
  dtmCourses,
  zumbidoCourses,
  cervicalCourses,
  oculomotoraCourses,
  vestibularCourses,
  basicCourses,
  managementCourses,
  relatedCourses
} from './data/courses';
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

          <div id="cursos" className="relative z-30 pb-20 bg-background">
            <div className="px-6 mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Explore por Área</h2>
              <p className="text-gray-400">O conteúdo organizado para sua evolução.</p>
            </div>

            <CourseCarousel title="Matérias básicas" courses={basicCourses} />
            <CourseCarousel title="Cefaleia" courses={cefaleiaCourses} />
            <CourseCarousel title="Disfunção Temporomandibular" courses={dtmCourses} />
            <CourseCarousel title="Zumbido" courses={zumbidoCourses} />
            <CourseCarousel title="Sistema Vestibular" courses={vestibularCourses} />
            <CourseCarousel title="Dor Cervical" courses={cervicalCourses} />
            <CourseCarousel title="Disfunção Óculomotora" courses={oculomotoraCourses} />
            {relatedCourses.length > 0 && <CourseCarousel title="Condições Relacionadas" courses={relatedCourses} />}
            <CourseCarousel title="Gestão e Marketing" courses={managementCourses} />

            <div className="mt-16 text-center px-6">
              <a
                href="https://lp.craniumcursos.com.br/checkout/portal-cranium"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-black rounded-lg font-bold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(251,191,36,0.5)]"
              >
                Começar Minha Jornada Agora
              </a>
            </div>
          </div>

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
