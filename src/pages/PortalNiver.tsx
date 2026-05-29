import { useEffect } from 'react';
import PortalThankYou from '../components/niver/PortalThankYou';
import PortalUpsellTransition from '../components/niver/PortalUpsellTransition';
import PortalUpsellHero from '../components/niver/PortalUpsellHero';
import PortalAreas from '../components/niver/PortalAreas';
import PortalLiveFeatures from '../components/niver/PortalLiveFeatures';
import PortalUpsellDecision from '../components/niver/PortalUpsellDecision';
import NiverFooter from '../components/niver/NiverFooter';

/**
 * /portal-niver — Thank-you page (parabéns + acesso) + upsell Portal Cranium R$ 297.
 * Estrutura:
 *  1. PortalThankYou — confirmação, acesso, próximos passos
 *  2. PortalUpsellTransition — "espera, antes de fechar..."
 *  3. PortalUpsellHero — headline forte + preço em destaque
 *  4. PortalAreas — 8 áreas, 39 cursos (escopo real)
 *  5. PortalLiveFeatures — SophIA, plataforma viva, comunidade
 *  6. PortalUpsellDecision — CTA + recusa visível + garantia
 */
export default function PortalNiver() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Acesso liberado · Upgrade para o Portal Cranium | Cranium';

    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.getAttribute('content') ?? '';
    metaDescription?.setAttribute(
      'content',
      'Seus 7 cursos de cefaleia estão liberados. Upgrade único para o Portal Cranium completo (8 áreas, 39 cursos, SophIA) por R$ 297 — só nessa página.',
    );

    return () => {
      document.title = previousTitle;
      metaDescription?.setAttribute('content', previousDescription);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-cranium-turquesa/30">
      <a
        href="#portal-main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-cranium-turquesa focus:text-cranium-azul-marinho focus:rounded-lg focus:font-bold"
      >
        Pular para o conteúdo principal
      </a>

      <main id="portal-main">
        <PortalThankYou />
        <PortalUpsellTransition />
        <PortalUpsellHero />
        <PortalAreas />
        <PortalLiveFeatures />
        <PortalUpsellDecision />
      </main>

      <NiverFooter />
    </div>
  );
}
