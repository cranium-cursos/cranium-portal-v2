import { useEffect } from 'react';
import NiverTopBanner from '../components/niver/NiverTopBanner';
import NiverHero from '../components/niver/NiverHero';
import NiverLetter from '../components/niver/NiverLetter';
import NiverCoursesGrid from '../components/niver/NiverCoursesGrid';
import NiverPricing from '../components/niver/NiverPricing';
import NiverGuarantee from '../components/niver/NiverGuarantee';
import NiverDetails from '../components/niver/NiverDetails';
import NiverFAQ from '../components/niver/NiverFAQ';
import NiverFinalCTA from '../components/niver/NiverFinalCTA';
import NiverFooter from '../components/niver/NiverFooter';

/**
 * /niver-samuel — Landing page da promo de aniversário (7 cursos R$ 97).
 * Estrutura: banner → hero → carta → cursos → preço → garantia → detalhes → FAQ → CTA final → footer.
 */
export default function NiverSamuel() {
  // Atualiza title + meta description para SEO local
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Aniversário do Samuel · 7 cursos de cefaleia por R$ 97 | Portal Cranium';

    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.getAttribute('content') ?? '';
    metaDescription?.setAttribute(
      'content',
      'Aniversário do Samuel: 7 cursos de cefaleia do Portal Cranium por R$ 97 (ou 12x R$ 9,70). Só sábado 30/05 e domingo 31/05. Garantia de 7 dias.',
    );

    return () => {
      document.title = previousTitle;
      metaDescription?.setAttribute('content', previousDescription);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-cranium-turquesa/30">
      {/* Skip link para acessibilidade */}
      <a
        href="#niver-main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-cranium-turquesa focus:text-cranium-azul-marinho focus:rounded-lg focus:font-bold"
      >
        Pular para o conteúdo principal
      </a>

      <NiverTopBanner />

      <main id="niver-main">
        <NiverHero />
        <NiverLetter />
        <NiverCoursesGrid />
        <NiverPricing />
        <NiverGuarantee />
        <NiverDetails />
        <NiverFAQ />
        <NiverFinalCTA />
      </main>

      <NiverFooter />
    </div>
  );
}
