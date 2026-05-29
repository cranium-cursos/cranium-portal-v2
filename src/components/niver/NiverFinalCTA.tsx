import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { NIVER_OFFER } from './NiverData';

/**
 * CTA final — última oportunidade de conversão antes do footer.
 */
export default function NiverFinalCTA() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative py-20 md:py-28 px-6 bg-black overflow-hidden"
      aria-labelledby="niver-final-cta-title"
    >
      {/* Glow turquesa decorativo */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cranium-turquesa/10 blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: reduce ? 0 : 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        className="relative max-w-3xl mx-auto text-center"
      >
        <h2
          id="niver-final-cta-title"
          className="font-display text-3xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight"
        >
          Sábado e domingo.{' '}
          <span className="text-cranium-turquesa">Depois volta a R$ 397.</span>
        </h2>

        <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Bom fim de semana — e obrigado pelo carinho de aniversário.
        </p>

        <a
          href={NIVER_OFFER.checkoutUrl}
          className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-cranium-turquesa hover:bg-cranium-turquesa/90 text-cranium-azul-marinho rounded-xl font-bold text-lg transition-all shadow-[0_12px_32px_-8px_rgba(16,193,180,0.6)] hover:shadow-[0_16px_40px_-8px_rgba(16,193,180,0.8)] hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cranium-turquesa min-h-[44px]"
          data-cta="final"
        >
          Quero os 7 cursos por R$ 97
          <ArrowRight className="w-5 h-5" aria-hidden="true" />
        </a>

        <p className="mt-6 text-gray-500 text-sm">
          — Samuel Lodovichi
        </p>
      </motion.div>
    </section>
  );
}
