import { useCallback, useEffect, useState } from 'react';
import { useDeadline } from '../components/black26/Black26Data';
import {
  Black26FinalCTA,
  Black26Hero,
  Black26Pricing,
  Black26TopBar,
} from '../components/black26/Black26Offer';
import {
  Black26FirstWeek,
  Black26GuaranteeFaq,
  Black26Problem,
  Black26Products,
  Black26Samuel,
  Black26Testimonials,
} from '../components/black26/Black26Content';
import SubscriberModal from '../components/black26/SubscriberModal';

/**
 * /black26 — Black Cranium 2026 (19/11 a 29/11/2026).
 * Estrutura: barra de prazo → hero → problema → produtos → oferta (geral + assinante)
 * → quem ensina → depoimentos → primeira semana → garantia + FAQ → CTA final.
 */
export default function Black26() {
  const deadline = useDeadline();
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = useCallback(() => setModalOpen(false), []);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Black Cranium 2026 · Formação em cefaleia + 1 ano de Portal | Cranium';

    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.getAttribute('content') ?? '';
    metaDescription?.setAttribute(
      'content',
      'CPF Online com certificado de 80h reconhecido pelo MEC, um ano de Portal Cranium, TMF e a imersão Além da Medicação. De R$ 2.188 por R$ 897. Até domingo, 29/11.',
    );

    return () => {
      document.title = previousTitle;
      metaDescription?.setAttribute('content', previousDescription);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black font-sans text-white selection:bg-cranium-turquesa/30">
      <a
        href="#black26-main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-cranium-turquesa focus:px-4 focus:py-2 focus:font-bold focus:text-cranium-azul-marinho"
      >
        Pular para o conteúdo principal
      </a>

      <Black26TopBar deadline={deadline} />

      <main id="black26-main">
        <Black26Hero expired={deadline.expired} />
        <Black26Problem />
        <Black26Products />
        <Black26Pricing expired={deadline.expired} onSubscriberClick={() => setModalOpen(true)} />
        <Black26Samuel />
        <Black26Testimonials />
        <Black26FirstWeek />
        <Black26GuaranteeFaq />
        <Black26FinalCTA expired={deadline.expired} />
      </main>

      <footer className="border-t border-white/10 bg-black py-8 text-center text-xs text-white/40">
        © 2026 Cranium Cursos
      </footer>

      <SubscriberModal open={modalOpen} onClose={closeModal} />
    </div>
  );
}
