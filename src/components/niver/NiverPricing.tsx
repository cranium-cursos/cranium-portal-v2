import { motion, useReducedMotion } from 'framer-motion';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { NIVER_OFFER } from './NiverData';

const stack = [
  { label: '7 cursos completos sobre cefaleia', detail: '4h cada · vídeo-aulas gravadas' },
  { label: 'Acesso pelo Portal Cranium', detail: 'Imediato após pagamento' },
  { label: 'Certificado em todos os cursos', detail: 'Por curso concluído' },
  { label: 'Acesso por 1 ano', detail: 'Assista no seu ritmo, quantas vezes quiser' },
];

/**
 * Bloco de preço — stack honesto (sem inflar), garantia, CTA forte.
 */
export default function NiverPricing() {
  const reduce = useReducedMotion();

  return (
    <section
      id="precos"
      className="relative py-20 md:py-28 px-6 bg-gradient-to-b from-black via-cranium-azul-marinho/20 to-black overflow-hidden"
      aria-labelledby="niver-pricing-title"
    >
      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cranium-turquesa/10 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto">
        {/* Card */}
        <h2 id="niver-pricing-title" className="sr-only">
          Sua oferta: R$ {NIVER_OFFER.priceNow} pelos 7 cursos
        </h2>
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
          className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-6 md:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Inner glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-cranium-turquesa/10 blur-[80px] pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative grid md:grid-cols-5 gap-10 items-center">
            {/* Left: Stack */}
            <div className="md:col-span-3 space-y-5">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                Tudo o que você leva:
              </h3>
              <ul className="space-y-3" aria-label="O que está incluído na oferta">
                {stack.map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <div className="mt-1 bg-cranium-turquesa/20 p-1 rounded-full flex-none">
                      <Check className="w-4 h-4 text-cranium-turquesa" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-white font-medium leading-snug">{item.label}</p>
                      <p className="text-gray-500 text-sm">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Comparison */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-baseline justify-between text-sm">
                  <span className="text-gray-400">Valor normal do conjunto</span>
                  <span className="text-gray-400 line-through decoration-red-500/60">
                    R$ {NIVER_OFFER.priceFull}
                  </span>
                </div>
                <div className="flex items-baseline justify-between text-sm mt-2">
                  <span className="text-cranium-turquesa font-semibold">
                    Você economiza
                  </span>
                  <span className="text-cranium-turquesa font-bold">
                    R$ {NIVER_OFFER.savings}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Price + CTA */}
            <div className="md:col-span-2 text-center bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <span className="inline-block px-3 py-1 rounded-full bg-cranium-turquesa/20 text-cranium-turquesa text-xs font-bold uppercase tracking-wider mb-4 border border-cranium-turquesa/30">
                48h · Aniversário
              </span>

              <div className="mb-6">
                <p className="text-gray-400 text-sm mb-2">
                  De <span className="line-through">R$ {NIVER_OFFER.priceFull}</span> por:
                </p>
                <div className="mb-1">
                  <span className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
                    R$ {NIVER_OFFER.priceNow}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">
                  ou {NIVER_OFFER.installments.count}x de{' '}
                  <span className="text-white font-semibold">
                    R$ {NIVER_OFFER.installments.value.toFixed(2).replace('.', ',')}
                  </span>
                </p>
              </div>

              <a
                href={NIVER_OFFER.checkoutUrl}
                className="inline-flex items-center justify-center gap-2 w-full py-4 px-4 bg-cranium-turquesa hover:bg-cranium-turquesa/90 text-cranium-azul-marinho rounded-xl font-bold text-sm md:text-base whitespace-nowrap transition-all shadow-[0_8px_24px_-8px_rgba(16,193,180,0.5)] hover:shadow-[0_12px_32px_-8px_rgba(16,193,180,0.7)] hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cranium-turquesa min-h-[48px]"
                data-cta="pricing-primary"
              >
                Garantir meu acesso
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400">
                <ShieldCheck className="w-4 h-4 text-cranium-turquesa" aria-hidden="true" />
                Garantia incondicional de {NIVER_OFFER.guaranteeDays} dias
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
