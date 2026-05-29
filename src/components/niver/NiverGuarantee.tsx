import { motion, useReducedMotion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

/**
 * Bloco de garantia — selo + copy curta e direta.
 */
export default function NiverGuarantee() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative py-16 md:py-20 px-6 bg-[#050505]"
      aria-labelledby="niver-guarantee-title"
    >
      <motion.div
        initial={{ opacity: 0, y: reduce ? 0 : 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ type: 'spring', stiffness: 140, damping: 20 }}
        className="max-w-3xl mx-auto bg-gradient-to-br from-cranium-azul-marinho/40 to-black border border-cranium-turquesa/20 rounded-3xl p-8 md:p-12 text-center"
      >
        {/* Seal */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cranium-turquesa/15 mb-6">
          <ShieldCheck className="w-8 h-8 text-cranium-turquesa" aria-hidden="true" />
        </div>

        <h2
          id="niver-guarantee-title"
          className="font-display text-2xl md:text-3xl font-bold text-white mb-4"
        >
          Garantia de 7 dias
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed max-w-xl mx-auto">
          Compra, assiste, e se não for pra você, é só me mandar uma mensagem que eu devolvo o
          dinheiro. <strong className="text-white">Sem perguntas, sem formulário.</strong>
        </p>
      </motion.div>
    </section>
  );
}
