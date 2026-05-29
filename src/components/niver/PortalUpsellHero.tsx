import { motion, useReducedMotion } from 'framer-motion';

/**
 * Headline forte do upsell — frame "você comprou cefaleia, falta o resto".
 * Sem preço aqui (preço só aparece na seção de decisão, no fim).
 */
export default function PortalUpsellHero() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative pt-16 pb-16 md:pt-20 md:pb-20 px-6 bg-black overflow-hidden"
      aria-labelledby="upsell-hero-title"
    >
      {/* Glow turquesa forte, centralizado, sobre fundo preto */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[100vw] h-[80vh] bg-cranium-turquesa/30 blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      {/* Glow secundário lateral */}
      <div
        className="absolute -bottom-20 right-0 w-[50vw] h-[50vh] bg-cranium-turquesa/20 blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: reduce ? 0 : 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        className="relative max-w-4xl mx-auto text-center"
      >
        <h2
          id="upsell-hero-title"
          className="font-display text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.05] tracking-tight"
        >
          Você pegou cefaleia.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cranium-turquesa to-cranium-azul-diamante">
            Mas seu paciente não tem só cefaleia.
          </span>
        </h2>

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          Os 7 cursos que você acabou de garantir são{' '}
          <strong className="text-white">uma das 8 áreas</strong> que a gente cobre dentro
          do Portal Cranium. Vou te mostrar o resto.
        </p>
      </motion.div>
    </section>
  );
}
