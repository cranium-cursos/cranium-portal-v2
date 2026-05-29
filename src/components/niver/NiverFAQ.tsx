import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { NIVER_FAQ } from './NiverData';

/**
 * FAQ específico da campanha (não compartilha estado com a home FAQ).
 * Padrão acessível: button[aria-expanded] + region.
 */
export default function NiverFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduce = useReducedMotion();

  return (
    <section
      className="py-20 md:py-24 px-6 bg-[#050505]"
      aria-labelledby="niver-faq-title"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-cranium-turquesa text-xs font-bold uppercase tracking-widest mb-3">
            Perguntas que costumam aparecer
          </p>
          <h2
            id="niver-faq-title"
            className="font-display text-3xl md:text-4xl font-bold text-white"
          >
            Tira-dúvidas rápido
          </h2>
        </div>

        <div className="space-y-3">
          {NIVER_FAQ.map((faq, index) => {
            const isOpen = openIndex === index;
            const questionId = `niver-faq-q-${index}`;
            const answerId = `niver-faq-a-${index}`;

            return (
              <div
                key={questionId}
                className="border border-white/10 rounded-2xl bg-[#0A0A0A] overflow-hidden hover:border-white/20 transition-colors"
              >
                <button
                  id={questionId}
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left hover:bg-white/5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-cranium-turquesa min-h-[44px]"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                >
                  <span className="text-white font-medium text-base md:text-lg leading-snug">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <Minus
                      className="w-5 h-5 text-cranium-turquesa flex-shrink-0"
                      aria-hidden="true"
                    />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" aria-hidden="true" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={
                        reduce
                          ? { duration: 0 }
                          : { type: 'spring', stiffness: 200, damping: 28 }
                      }
                    >
                      <div
                        id={answerId}
                        role="region"
                        aria-labelledby={questionId}
                        className="px-5 md:px-6 pb-5 md:pb-6 text-gray-300 leading-relaxed border-t border-white/5 pt-4"
                      >
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
