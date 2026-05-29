import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { PORTAL_UPSELL } from './NiverData';

/**
 * Bloco de decisão final do upsell — CTA primário forte + opção de recusa visível.
 */
export default function PortalUpsellDecision() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative py-20 md:py-28 px-6 bg-black overflow-hidden"
      aria-labelledby="upsell-decision-title"
    >
      {/* Glow turquesa concentrado no centro (dramático no CTA) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cranium-turquesa/30 blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: reduce ? 0 : 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        className="relative max-w-3xl mx-auto"
      >
        {/* Card principal */}
        <div className="bg-[#0A0A0A]/85 backdrop-blur-sm border border-cranium-turquesa/40 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
          {/* Guarantee badge */}
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-cranium-turquesa/15 mb-6">
            <ShieldCheck className="w-7 h-7 text-cranium-turquesa" aria-hidden="true" />
          </div>

          <h2
            id="upsell-decision-title"
            className="font-display text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight tracking-tight"
          >
            A decisão é sua.
          </h2>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-2 max-w-xl mx-auto">
            Você comprou 7 cursos de cefaleia por R$ 97. Foi um bom negócio.
          </p>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            Adicionar mais 32 cursos, 4 simpósios, 3 maratonas, SophIA, comunidade e atualização
            mensal por <strong className="text-white">R$ 297</strong> — é o tipo de decisão que
            o seu eu daqui a seis meses agradece.
          </p>

          {/* Preço */}
          <div className="mb-8">
            <p className="text-gray-400 text-sm mb-2">
              De <span className="line-through">R$ {PORTAL_UPSELL.priceFull}</span> por:
            </p>
            <p className="text-5xl md:text-6xl font-extrabold text-cranium-turquesa tracking-tight">
              R$ {PORTAL_UPSELL.priceNow}
            </p>
            <p className="text-gray-400 text-sm mt-2">no primeiro ano · acesso completo</p>
          </div>

          {/* CTA principal */}
          <a
            href={PORTAL_UPSELL.checkoutUrl}
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-10 py-5 bg-cranium-turquesa hover:bg-cranium-turquesa/90 text-cranium-azul-marinho rounded-xl font-bold text-base md:text-lg transition-all shadow-[0_12px_32px_-8px_rgba(16,193,180,0.6)] hover:shadow-[0_16px_40px_-8px_rgba(16,193,180,0.8)] hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cranium-turquesa min-h-[44px]"
            data-cta="upsell-primary"
          >
            Sim, quero o Portal Cranium por R$ 297
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </a>

          {/* CTA secundário (recusa visível) */}
          <p className="mt-6">
            <a
              href="/niver-samuel"
              className="text-gray-400 hover:text-gray-200 text-sm underline underline-offset-4 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cranium-turquesa min-h-[44px] inline-block px-2 py-2"
            >
              Não, fico só com os 7 cursos de cefaleia
            </a>
          </p>

          {/* Guarantee detail */}
          <p className="mt-8 pt-6 border-t border-white/10 text-gray-400 text-sm leading-relaxed max-w-md mx-auto">
            Entra no Portal. Explora as 8 áreas. Se em 7 dias não fizer sentido para a sua
            prática, devolvemos 100%. <strong className="text-white">Sem perguntas.</strong>
          </p>
        </div>

        {/* Signature */}
        <div className="mt-10 text-center max-w-xl mx-auto">
          <p className="text-gray-400 text-sm leading-relaxed italic">
            De clínico para clínico: a parte difícil você já fez — abriu espaço na agenda mental
            para estudar cefaleia. Aproveita o impulso e leva o resto.
          </p>
          <p className="mt-4 text-gray-500 text-sm">— Samuel Lodovichi</p>
        </div>
      </motion.div>
    </section>
  );
}
